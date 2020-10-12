import React, { Component } from 'react'


class Page extends Component
{

    f()
    {
        var code=document.getElementById('ol').value
        document.getElementById('o').innerHTML=code
    }


    render()
    {
        return(<>

            <h2 class="text-center text-uppercase m-2">online editor</h2>   

            <div class="container border p-5 m-5">
                <div class="row">
                    <div class="col-lg-6">
                        <h4 class="text-center">HTML ONLINE EDITOR </h4>
                        <button class="btn btn-success m-2" onclick="f()" > Run </button>
                        <br/>
                        <textarea id="ol" placeholder="enter the source code" ></textarea>
                    </div>

                    <div class="col-lg-6 border  mt-5">

                    <output id="o"> output </output>

                    </div>
                </div>
            </div>

        </>)
    }
}


export default Page




