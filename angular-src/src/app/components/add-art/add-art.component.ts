import { Component, OnInit, Inject } from '@angular/core';
import{ ART, ARTMEIDA} from 'src/app/model/arts'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-add-art',
  templateUrl: './add-art.component.html',
  styleUrls: ['./add-art.component.css']
})
export class AddArtComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddArtComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ART) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  arts : ART []
  artsMedia : ARTMEIDA []
  images = [];
  addArtForm = new FormGroup({
    artDescription: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  get f(){
    return this.addArtForm.controls;
  }
  ngOnInit(): void {

  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
   
                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.images.push(event.target.result); 
   
                   this.addArtForm.patchValue({
                      fileSource: this.images
                   });
                }
  
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }
    
  submit(){
    console.log(this.addArtForm.value);
    //upload or save files here
   
  }



}
