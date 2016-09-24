/**
 * Created by phanquan on 5/2/16.
 */
import {Injectable} from  "@angular/core";
import {User} from  "../models/user.model";
import {Http, Response,Headers} from '@angular/http';
import {contentHeaders} from '../headers';

@Injectable()
export class SetupService {
    rateType=[
        {ID:'1',Code:'BS',Name:'Busiss',Active:'1'},
        {ID:'2',Code:'WI',Name:'Walkin',Active:'1'},
        {ID:'3',Code:'PH',Name:'Per house',Active:'1'},
    ]

    rates=[
        {ID:'1',Code:'R1',Name:'Rate 1',RoomType:'1',RoomCategory:'1',RateType:'1',Rate:'20',RateVND:'300000', Active:'1'},
        {ID:'2',Code:'R2',Name:'Rate 2',RoomType:'1',RoomCategory:'1',RateType:'1',Rate:'20',RateVND:'300000', Active:'1'},
        {ID:'3',Code:'R3',Name:'Rate 3',RoomType:'1',RoomCategory:'1',RateType:'1',Rate:'20',RateVND:'300000', Active:'1'},
    ]

    roomList=[
        {ID:'R01',RoomNo:'101',Type:'1',Category:'1',Floor:'1',Status:'1',Active:'1',Etx:'1'},
        {ID:'R02',RoomNo:'102',Type:'1',Category:'1',Floor:'1',Status:'1',Active:'1',Etx:'1'},
        {ID:'R03',RoomNo:'103',Type:'1',Category:'1',Floor:'1',Status:'1',Active:'1',Etx:'1'},
        {ID:'R04',RoomNo:'104',Type:'1',Category:'1',Floor:'1',Status:'1',Active:'1',Etx:'1'},
        {ID:'R05',RoomNo:'105',Type:'1',Category:'1',Floor:'1',Status:'1',Active:'1',Etx:'1'},
        {ID:'R06',RoomNo:'201',Type:'1',Category:'1',Floor:'2',Status:'1',Active:'1',Etx:'1'},
        {ID:'R07',RoomNo:'202',Type:'1',Category:'1',Floor:'3',Status:'1',Active:'1',Etx:'1'},
        {ID:'R08',RoomNo:'203',Type:'1',Category:'1',Floor:'4',Status:'1',Active:'1',Etx:'1'},
    ];

    roomTypeList=[
        {ID:'1',Code:'DL',Name:'Delux',Active:'1'},
        {ID:'2',Code:'DL1',Name:'Delux1',Active:'1'},
        {ID:'3',Code:'DL2',Name:'Delux2',Active:'1'},
        {ID:'4',Code:'DL3',Name:'Delux3',Active:'1'},
    ]

    roomCategoryList=[
        {ID:'1',Code:'SG',Name:'Single',Active:'1'},
        {ID:'2',Code:'DU',Name:'Double',Active:'1'},
        {ID:'3',Code:'TR',Name:'Trip',Active:'1'},
    ]

    packageCode=[
        {ID:'1',Code:'Min',Name:'Minibar',Active:'1'},
        {ID:'2',Code:'Res',Name:'Restaurent',Active:'1'},
        {ID:'3',Code:'Bar',Name:'Bar',Active:'1'},
        {ID:'4',Code:'Rep',Name:'Le tan',Active:'1'},
        {ID:'5',Code:'Oth',Name:'Other',Active:'1'},
    ]

    packages=[
        {ID:'1',PackageCode:'Min',Code:'Min',Name:'Minibar',Active:'1'},
        {ID:'2',PackageCode:'Res',Code:'Res',Name:'Restaurent',Active:'1'},
        {ID:'3',PackageCode:'Bar',Code:'Bar',Name:'Bar',Active:'1'},
        {ID:'4',PackageCode:'Rep',Code:'Room',Name:'Doanh thu phong',Active:'1'},
        {ID:'5',PackageCode:'Rep',Code:'Rob',Name:'Phu thu phong',Active:'1'},
        {ID:'6',PackageCode:'Rep',Code:'Pic',Name:'Don tien',Active:'1'},
        {ID:'7',PackageCode:'Rep',Code:'Tra',Name:'Ban tua DL',Active:'1'},
    ]

}