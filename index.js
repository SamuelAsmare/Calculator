 var sam=(num)=>{
                document.getElementById('val').value+=num;
            }
            var del=()=>{
                document.getElementById('val').value=document.getElementById('val').value.slice(0,-1);
            }
            var equal=()=>{
                var a=document.getElementById('val').value;
                if(a==''){
                    return '';
                }
                document.getElementById('val').value=eval(a);
            }
            var square=()=>{
                var a=document.getElementById('val').value;
                if(a==''){
                    return '';
                }
                document.getElementById('val').value=a*a;
            }
            var factorial=(n)=>{
                if(n==0)
                    return 1;
                var pro=1;
                for(var i=1;i<=n;i++){
                    pro=pro*i;
                }return pro;
 
            }
            var fact=()=>{
                var a=document.getElementById('val').value;
                if(a==""){
                    return "";
                }
                document.getElementById('val').value=factorial(a);
            }
            var myfirst=()=>{
                    document.getElementById('val').value='';
            }