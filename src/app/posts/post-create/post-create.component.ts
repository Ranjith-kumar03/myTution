import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Subscription } from "rxjs";

import { PostsService } from "../posts.service";
import { Student } from "../post.model";
import { mimeType } from "./mime-type.validator";
import { AuthService } from "../../auth/auth.service";
//import { usernameValidator } from "./mime-type.validator";

@Component({
  selector: "app-post-create",
  templateUrl: "./post-create.component.html",
  styleUrls: ["./post-create.component.css"]
})
export class PostCreateComponent implements OnInit, OnDestroy {
  enteredTitle = "";
  enteredContent = "";
  student!: Student;
  isLoading = false;
  form!: FormGroup;
  imagePreview!: string;
  private mode = "create";
  private postId: any;
  private authStatusSub!: Subscription;

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(authStatus => {
        this.isLoading = false;
      });
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      age: new FormControl(null, {
        validators: [Validators.required, ]
      }),
      gender: new FormControl(null, {
        validators: [Validators.required, ]
      }),
      timing: new FormControl(null, {
        validators: [Validators.required, ]
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],//asyncValidators: [ mimeType]
        //asyncValidators: [mimeType]
      })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("postId")) {
        this.mode = "edit";
        this.postId = paramMap?.get("postId");
        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe(student => {
          this.isLoading = false;
          console.log("see the student detail",student)
          this.student = {
            name: student.name,
                age: student.age,
                gender: student.gender,
                timing:student.timing,
                content: student.content,
                id: student._id,
                imagePath: student.imagePath,
                creator: student.creator
          };
          this.form.setValue({
                name: this.student.name,
                age: this.student.age,
                gender: this.student.gender,
                timing:this.student.timing,
                content: this.student.content,
                image: this.student.imagePath,

          });
          this.imagePreview=this.student.imagePath
        });
      } else {
        this.mode = "create";
        this.postId = null;
      }
    });
  }

  onImagePicked(event: any) {
    const file = event.target.files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.postsService.addPost(
        this.form.value.name,
        this.form.value.age,
        this.form.value.gender,
        this.form.value.timing,
        this.form.value.content,
        this.form.value.image
      );
    } else {
      console.log("ami in update")
      this.postsService.updatePost(

        this.postId,
        this.form.value.name,
        this.form.value.age,
        this.form.value.gender,
        this.form.value.timing,
        this.form.value.content,
        this.form.value.image
      );
      console.log("we are updating")
    }
    this.form.reset();
  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
