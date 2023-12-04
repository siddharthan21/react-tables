
import { sculptureList } from "./mok";

export default function App(){
    return(
        <div>
        <table>
            <tbody>
            <tr>
                <th>NAME</th>
                <th>subject</th>
                <th>crited</th>
                <th>slot</th>
            </tr>
                {sculptureList.map((val,key)=>{
                    console.log(val.name+" "+key)
                    return(
                    <tr className={key} key={key} >
                        <td>{val.name}</td>
                        <td>{val.artist}</td>
                        <td>{val.description}</td>
                        <td><img src={val.url} width={80} /></td>
                    </tr>
                )
                })}
            </tbody>    
        </table>
        </div>
    )
}
// const list = [{
//     name:'xxxxx',
//     subject:'yyyy',
//     crited:'6',
//     slot:'A1+TA2'
// },{
// name:'ppp',
// subject:'llll',
// crited:'6',
// slot:'A1+TA2'
// },{
// name:'ooo',
// subject:'sss',
// crited:'6',
// slot:'A1+TA2'
// }
// ]

