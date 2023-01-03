import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeNestedDataSource } from '@angular/material/tree';
interface CourseNode {

  name: string;

  children?: CourseNode[];

}

const TREE_DATA: CourseNode[] = [

  {

    name: 'Angular for Beginners',

    children: [

      {

        name: 'Introduction to Angular'

      },

      {

        name: 'Installation of Angular'

      },

      {

        name: 'Routing'

      }

    ],

  },

  {

    name: 'Angular in depth',

    children: [

      {

        name: 'Services',

        children: [

          {

            name: 'Injectable'

          }

        ],

      },

      {

        name: 'HttpClient'

      },

      {

        name: 'Forms'

      }

    ],



  },

  {

    name: 'Angular Material',

    children: [

      {

        name: 'Tree Components'

      },

      {

        name: 'Material Module'

      }

    ],

  },

];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  treeControl = new NestedTreeControl<CourseNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<CourseNode>();
  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: CourseNode) => !!node.children && node.children.length > 0;


  minvalue = '';
  maxvalue = '';
  value1 = '';
  step = '';
  openState = false;



}


