import { LightningElement, api, wire,track } from 'lwc';
import showRecord from '@salesforce/apex/ShowObjectName.showRecord';

export default class ObjectList extends LightningElement {
@api obj;
@track backenddata = [];
@track columns = [{label: 'Name',fieldName: 'Name', type: 'text',sortable: true},
                  {label: 'Phone',fieldName: 'Phone',type: 'phone',sortable: true}];

@wire(showRecord,{obj:'$obj'})
    wireProperty({error , data}){
        if(data){
            console.log('Data in Child 2--',JSON.stringify(data));
            this.backenddata = data; 
        } 
        else if(error){
            console.log(error); 
        }    
    }
}