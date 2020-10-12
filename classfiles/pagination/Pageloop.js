import React from 'react'


var pagenum=[];


const Pageloop=({totalposts, postperaction, paginate })=>
{

    //1st logic for pagination set-up
    for(let i=1; i<=Math.ceil(totalposts/postperaction) ; i++)
    {
        pagenum.push(i)
    }


    return (<>
            
        <ul class="pagination justify-content-center pt-2">
            {
                paginate.map( (res,index)=>(
                    <li class="page-item" key={index}>
                        <a class="page-link" href="#" onClick={ ()=>paginate(res) }>{res}</a>
                    </li>
                ))
            }
        </ul>
      
    </>)


}

export default Pageloop;