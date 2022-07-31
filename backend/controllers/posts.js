const Student = require("../models/post");

exports.createPost = (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");
  const post = new Student({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    timing: req.body.timing,
    content: req.body.content,
    imagePath: url + "/images/" + req.file.filename,
    creator: req.userData.userId
  });
  console.log("see the post",post)
  post
    .save()
    .then(createdPost => {
      res.status(201).json({
        message: "Student added successfully",
        post: {
          ...createdPost,
          id: createdPost._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a post failed!"
      });
    });
};

exports.updatePost = (req, res, next) => {
  let imagePath;
  console.log("see first image path",imagePath)
  if (req.file) {
    const url = req.protocol + "://" + req.get("host");
    imagePath = url + "/images/" + req.file.filename;

  }else{
    imagePath = req.body.imagePath;
  }

  const student = {
   // _id: req.body.id,
    // title: req.body.title,
    // content: req.body.content,
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    timing: req.body.timing,
    content: req.body.content,
    imagePath: imagePath,
    creator: req.userData.userId
  };
  console.log("see the updated student",student)

  Student.updateOne({ _id: req.params.id, creator: req.userData.userId }, student)
    .then(result => {
      if (result.n > 0) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      console.log("see the error",error)
      res.status(500).json({

        message: "Couldn't udpate post!"
      });

    });
};

exports.getPosts = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const postQuery = Student.find();
  let fetchedPosts;
  if (pageSize && currentPage) {
    postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }
  postQuery
    .then(documents => {
      console.log("see the students",documents)
      fetchedPosts = documents;
      return Student.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Students fetched successfully!",
        posts: fetchedPosts,
        maxPosts: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching posts failed!"
      });
    });
};

exports.getPost = (req, res, next) => {
  Student.findById(req.params.id)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Student not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching post failed!"
      });
    });
};

exports.deletePost = (req, res, next) => {
  Student.deleteOne({ _id: req.params.id, creator: req.userData.userId })
    .then(result => {
      console.log(result);
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting posts failed!"
      });
    });
};
