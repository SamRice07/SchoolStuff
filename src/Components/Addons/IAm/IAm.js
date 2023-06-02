import { useEffect, useRef, useState } from 'react';
import './IAm.scss'

function IAm() {

   function timeout(delay) {
      return new Promise( res => setTimeout(res, delay) );
  }

   const [fade, setFade] = useState({
      fade: 'fade-in',
   });

   const [opacity, setOpacity] = useState({
      opacity: 1
   });

   const scrollRef = useRef(null)
   const img1Ref = useRef(null)
   const img2Ref = useRef(null)

   useEffect(() => {
      const scroller = scrollRef.current
      var style = scroller.currentStyle || window.getComputedStyle(scroller)

      const img1 = img1Ref.current
      const img2 = img2Ref.current

      var margin = style.marginTop
      async function changeImg(){
         if(style.marginTop != margin){
            if(style.marginTop == '-42px'){
               setFade({fade:'fade-out'})
               setOpacity({opacity: 0})
               await timeout(1000)
               img1.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Friends_.jpg'
               img2.src = 'https://sun9-41.userapi.com/impf/c608016/v608016991/4429/0vsz1NfZ7IE.jpg?size=600x400&quality=96&sign=5243bffed89c47716ec5cc24b7816099&type=album'
               setFade({fade:'fade-in'})
               setOpacity({opacity: 1})
               margin = style.marginTop
            }
            else if (style.marginTop == '-84px'){
               await timeout(500)
               setFade({fade:'fade-out'})
               setOpacity({opacity: 0})
               await timeout(1000)
               img1.src = 'https://slator.com/assets/2021/06/Python-Coding-Translator.png'
               img2.src = 'https://blogs.perficient.com/files/RabbitMQ-featured-image-600x400.jpg'
               setFade({fade:'fade-in'})
               setOpacity({opacity: 1})
               margin = style.marginTop
            }
            else if (style.marginTop == '0px'){
               await timeout(500)
               setFade({fade:'fade-out'})
               setOpacity({opacity: 0})
               await timeout(1000)
               img1.src = 'https://northwoodhigh.iusd.org/themes/custom/iusd/assets/logo-article/northwoodhigh.png'
               img2.src = 'https://media.istockphoto.com/id/1149136707/photo/male-student-with-a-graduation-cap-and-diploma-showing-thumbs-up.jpg?s=612x612&w=0&k=20&c=QJFRueitMfXPCfgE5UREfvV1ewWnmrdvwyyZKmNUEgQ='
               setFade({fade:'fade-in'})
               setOpacity({opacity: 1})
               margin = style.marginTop
            }
         }
         
      }

      const interval = setInterval(() => {changeImg()}, 1000);
       return () => clearInterval(interval);   
   }, [])

   return (

      <div class="container">
      <p>I am a</p>
      <div id="scroller">
         <div class="inner" ref={scrollRef}>
            <span>Student</span>
            <span>Friend</span>
            <span>Developer</span>
         </div>
      </div>

      <div id='images'>
         <img src='https://northwoodhigh.iusd.org/themes/custom/iusd/assets/logo-article/northwoodhigh.png' id='image1' ref={img1Ref} className={fade.fade} style={{opacity: opacity}}/>
         <img src='https://media.istockphoto.com/id/1149136707/photo/male-student-with-a-graduation-cap-and-diploma-showing-thumbs-up.jpg?s=612x612&w=0&k=20&c=QJFRueitMfXPCfgE5UREfvV1ewWnmrdvwyyZKmNUEgQ=' id='image2' ref={img2Ref}  className={fade.fade}/>

      </div>
      </div>

   );
}

export default IAm;