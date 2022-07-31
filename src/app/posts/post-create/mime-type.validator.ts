import { AbstractControl } from '@angular/forms';
import { Observable, Observer, of } from 'rxjs';

export const mimeType = (
  control: AbstractControl
): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
  if (typeof control.value === 'string') {
    return of({ invalidMimeType: false });
  }
  const file = control.value as File;

  const fileReader = new FileReader();
  const frObs = new Observable((observer: Observer<{ [key: string]: any }>) => {
      fileReader.addEventListener('loadend', () => {
        const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(
          0,
          4
        );

        let header = '';
        let isValid = false;
        for (let i = 0; i < arr.length; i++) {
          header += arr[i].toString(16);
        }

        switch (header) {
          case '89504e47':
            89504e47;
            isValid = true;
            break;
          case 'ffd8ffe0':
          case 'ffd8ffe1':
          case 'ffd8ffe2':
          case 'ffd8ffe3':
          case 'ffd8ffe8':
            isValid = true;
            break;
          default: // Or you can use the blob.type as fallback
            isValid = false;
            break;
        }
        if (isValid) {
          console.log('see the type of isvalid', frObs);
            observer.next({ invalidMimeType: false });
        } else {
          console.log('see the type of is in valid', frObs);
           observer.next({ invalidMimeType: true });
        }
         observer.complete();
      });
      fileReader.readAsArrayBuffer(file);
    }
  );
console.log("see the object",)
  return frObs;
};
