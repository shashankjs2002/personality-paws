import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
// import backImg from "./background.jpg";
// import backImg from "./PersonalityPaws.png";
import backImg from "./Certificate.png";

const Canvas = (props) => {

    // const first = useRef()
    let canvasRef = useRef(null)
    let canvas2Ref = useRef(null)
    const [canvasload, setCanvasload] = useState(false)
  
    let downld = true
    let imgRef = useRef()
    var link = document.createElement('a');
    link.download = 'personality-paws-certificate.png';
    
                
    useEffect(() => {
        if (canvasload === true) {
            let img = document.getElementById('image')
            const ctx = canvasRef.current.getContext("2d");
            const ctx2 = canvas2Ref.current.getContext("2d");
            if (canvasload && downld) {
                downld =false
                if(window.innerWidth < 650){

                    ctx.drawImage(img, 0, 0, window.innerWidth*0.9, 1414*window.innerWidth*0.9/2000);
                    
                    ctx.font = `${27*window.innerWidth/650}px Dancing Script`;
                    ctx.textAlign = "center"; 
                    ctx.fillText(props.username, 325*0.9*window.innerWidth/650, 210*window.innerWidth/650);
    
                    ctx.font = `${9*window.innerWidth/650}px Tinos`;
                    ctx.textAlign = "center"; 
                    ctx.fillText(props.text, 350*0.9*window.innerWidth/650, 280*window.innerWidth/650);
    
                    ctx.font = `${14*window.innerWidth/650}px Dancing Script`;
                    ctx.textAlign = "center"; 
                    ctx.fillText(props.animal[0].toUpperCase() + props.animal.substr(1), 350*0.9*window.innerWidth/650, 300*window.innerWidth/650);
                } else {

                    ctx.drawImage(img, 0, 0, 650*0.9, 1414*650*0.9/2000);
                
                // ctx.drawImage(img, 0, 0);
                ctx.font = "27px Dancing Script";
                ctx.textAlign = "center"; 
                ctx.fillText(props.username, 325*0.9, 210);

                ctx.font = "09px Tinos";
                ctx.textAlign = "center"; 
                ctx.fillText(props.text, 350*0.9, 280);

                ctx.font = "14px Dancing Script";
                ctx.textAlign = "center"; 
                ctx.fillText(props.animal[0].toUpperCase() + props.animal.substr(1) + '.', 350*0.9, 300);
                }
                //  2nd hidden canvas
                let canva2 = document.getElementById('canva')
                // canva2.style.height = img.height*window.innerWidth*0.9/img.width
                // setCanvasload(img.height*window.innerWidth*0.9/img.width)
                // canva.style.height = '100px'
                // if(window.innerWidth){}
                // ctx.drawImage(img, 0, 0, window.innerWidth*0.9, 1414*window.innerWidth*0.9/2000);
                ctx2.drawImage(img, 0, 0,2000, 1414);
                // ctx.drawImage(img, 0, 0);
                ctx2.font = "85px Dancing Script";
                ctx2.textAlign = "center"; 
                ctx2.fillText(props.username, 1000, 720);

                ctx2.font = "30px Tinos";
                ctx2.textAlign = "center"; 
                ctx2.fillText(props.text , 1000, 935);

                ctx2.font = "60px Dancing Script";
                ctx2.textAlign = "center"; 
                ctx2.fillText(props.animal[0].toUpperCase() + props.animal.substr(1) + '.', 1000, 1000);
                
                // var link = document.createElement('a');
                // link.download = 'personality-paws-certificate.png';
                link.href = document.getElementById('canva2').toDataURL()

                // link.click()
                // console.log(canva.style.height)
            } else {
                console.log("Certificate Not Generated..... Please check your Internet Connection")
            } 
        }
    }, [canvasload])

    const ondownload = (e) => {
        e.preventDefault();
        link.click()
    }
    return (
        <div>
            <h6>Certificate Preview: </h6>           
            <canvas 
                id ='canva' 
                ref={canvasRef} 
                width={window.innerWidth>650 ? 650 :window.innerWidth *0.9} 
                height= {window.innerWidth>650 ? 1414* 650 *0.9/2000 : 1414*window.innerWidth*0.9/2000}
            />
            <canvas 
            style={{display:'none'}}
                id ='canva2' 
                ref={canvas2Ref} 
                width={2000} 
                height= {1414}
            />
            <p>***Preview Certificate Image has low quality.</p>
            {/* <!-- Call-to-action button --> */}
            <div className="cta-button" onClick={ondownload}>
                <button >Download</button>
            </div>
            <img
                style={{display:"none"}}
                ref={imgRef}
                alt="Stackoverflow56203352"
                src={backImg}
                id="image"
                className="hidden"
                onLoad={() => {
                    setCanvasload(true)
                }}
            />
        </div>
    );
}
export default Canvas;