
let uid;
firebase.auth().onAuthStateChanged((user) => {

  if (user) {
    uid = user.uid;
    console.log(uid)
   
  } else {
    window.location.href = "./SignIn.html"

  }
});

  let loading = document.getElementById("loading")
  let loaderdiv = document.getElementById("loaderdiv")
  let uldata = document.getElementById("uldata")
  loading.style.display="block"
  
  firebase.firestore().collection("users/").where("reject","==",true).get().then((querysnapshot)=>{ 
    if(querysnapshot.empty){
        let responduser = document.createElement("h1")
        uldata.appendChild(responduser)

        let respondusernode = document.createTextNode("Still No Any User Rejected")
        responduser.appendChild(respondusernode)
        loading.style.display="none"
    }
    else{
    querysnapshot.forEach((doc)=>{
        let mydata = doc.data();
        console.log(mydata)
        loading.style.display="none"
        loaderdiv.style.display="block"
        let li = document.createElement("li")
        li.setAttribute("class","li")
        let linode = document.createTextNode(mydata.FirstName + " " + mydata.LastName)
        uldata.appendChild(li)
        li.appendChild(linode)
        let buttondiv = document.createElement("div")
        buttondiv.setAttribute("class","buttondiv")
        li.appendChild(buttondiv)
      
       
      
        let getdata = document.createElement("div")
        uldata.appendChild(getdata)
        getdata.setAttribute("id","getdata")
        let br = document.createElement("br")
        getdata.appendChild(br)
      
        let getdataheading =  document.createElement("h1")
        getdata.appendChild(getdataheading)
        let getdataheadingnode = document.createTextNode(mydata.FirstName  +" " + mydata.LastName)
        getdataheading.appendChild(getdataheadingnode)
        let br2 = document.createElement("br")
        getdata.appendChild(br2)
        getdata.style.display="none"
      
        let getdatapara = document.createElement("p")
        getdata.appendChild(getdatapara)
        let getdataparanode =  document.createTextNode("FirstName:" + " " + mydata.FirstName  )
        getdatapara.appendChild(getdataparanode)
        let br3 = document.createElement("br")
        getdata.appendChild(br3)
      

    
              
      })
    }
    })
  
        

        

