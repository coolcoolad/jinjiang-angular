import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import imgList from '../../imgList';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit { 

  constructor(
    private router: Router,
  ) { }

  // private dfs(path: string) {
  //   let status = fs.statSync(path);
  //   if(status.isDirectory()) {
  //     let list = fs.readdirSync(path);
  //     for(let name in list)
  //       this.dfs(path + '/' +name);
  //   } else if (status.isFile()) {
  //     if(path.endsWith('.png') || path.endsWith('.gif') || path.endsWith('.jpg')) {
  //       let img = new Image();
  //       img.src = path;
  //     }
  //   }
  // }

  ngOnInit() {
    for(let i=0 ; i < imgList.length; i++) {
      let img = new Image();
      console.log(imgList[i]);
      img.src = imgList[i];
    }
  }

  onClickEntry() {
    this.router.navigate(['bund18/hint']);
  } 

}
