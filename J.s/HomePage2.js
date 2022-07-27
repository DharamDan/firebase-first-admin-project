let uid;

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
     
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  let loading = document.getElementById("loading")
  let loaderdiv = document.getElementById("loaderdiv")
  let uldata = document.getElementById("uldata")
  loading.style.display="block"
  
  firebase.firestore().collection("users/").get().then((querysnapshot)=>{
      loading.style.display="none"
      loaderdiv.style.display="block"
    querysnapshot.forEach((doc)=>{
        let mydata = doc.data();
        console.log(mydata)
        
        let li = document.createElement("li")
        li.setAttribute("class","li")
        let linode = document.createTextNode(mydata.FirstName + " " + mydata.LastName)
        uldata.appendChild(li)
        li.appendChild(linode)

        let buttondiv = document.createElement("div")
        li.appendChild(buttondiv)

        let button = document.createElement("button")
        buttondiv.appendChild(button)
        let buttonnode = document.createTextNode("View Data")
        button.appendChild(buttonnode)
        button.setAttribute("class","button")

        let getdata = document.createElement("div")
        uldata.appendChild(getdata)
        getdata.setAttribute("id","getdata")
       

        


        getdata.style.display="none"

        let getdatapara = document.createElement("p")
        getdata.appendChild(getdatapara)
        let getdataparanode =  document.createTextNode("FirstName :" + " "+" " + mydata.FirstName  )
        getdatapara.appendChild(getdataparanode)

        let getdatapara2 = document.createElement("p")
        getdata.appendChild(getdatapara2)
        let getdataparanode2 =  document.createTextNode("LastName :" + " "+" " + mydata.LastName  )
        getdatapara2.appendChild(getdataparanode2)

        let getdatapara3 = document.createElement("p")
        getdata.appendChild(getdatapara3)
        let getdataparanode3 =  document.createTextNode("Email :" + " "+" " + mydata.Email  )
        getdatapara3.appendChild(getdataparanode3)

        let getdatapara4 = document.createElement("p")
        getdata.appendChild(getdatapara4)
        let getdataparanode4 =  document.createTextNode("")
        if(mydata.profileImage){
          getdatapara4.innerHTML = "Profile :"  + " " + "Profile Image is Uploaded"
        }
        else{
          getdatapara4.innerHTML = "Profile :" + " " + "Profile Image is not Uploaded"
        }
        getdatapara4.appendChild(getdataparanode4)

        let getdatapara5 = document.createElement("p")
        getdata.appendChild(getdatapara5)
        let getdataparanode5 =  document.createTextNode("MobNumber :" + " "+" " + mydata.MobNumber  )
        getdatapara5.appendChild(getdataparanode5)

        let getdatapara6 = document.createElement("p")
        getdata.appendChild(getdatapara6)
        let getdataparanode6 =  document.createTextNode("CNIC :" + " "+" " + mydata.CNIC  )
        getdatapara6.appendChild(getdataparanode6)


        let getdatapara7 = document.createElement("p")
        getdata.appendChild(getdatapara7)
        let getdataparanode7 =  document.createTextNode( "")
        getdatapara7.appendChild(getdataparanode7)
        if(mydata.challan){
          getdatapara7.innerHTML =  "ChallanURL :" 
          let link = document.createElement("a")
          let linkchallan = document.createTextNode(" Click To View Challan")
          getdatapara7.appendChild(link)
          link.appendChild(linkchallan)
          link.setAttribute("href",mydata.challan)
          link.setAttribute("id","linkchallan")
        

         
        }
        else{
          getdatapara7.innerHTML ="ChallanUrl :" + " " + "Challan is not deposit"
        }
        

        let getdatapara8 = document.createElement("p")
        getdata.appendChild(getdatapara8)
        let getdataparanode8 =  document.createTextNode("Date-of-Birth :" + " "+" " + mydata.birth  )
        getdatapara8.appendChild(getdataparanode8)
        
        
        
        
  

        button.addEventListener("click",()=>{
            if(getdata.style.display != "none"){
                        getdata.style.display = "none";
                        button.innerHTML = "Show Me"
                        li.style.backgroundColor="#f5a425"
                        li.style.color="#1b1b1b"
                        li.style.padding="10px"
                        button.style.backgroundColor="#1b1b1b"
                        button.style.color="#fff"
                        
                        
                        
                      }
                      else{
                        getdata.style.display ="block";
                        li.style.backgroundColor="#1b1b1b"
                        li.style.color="#f5a425"
                        li.style.fontSize="22px"
                        li.style.padding="20px"
                        button.style.backgroundColor="#f5a425"
                        button.innerHTML = "Hide Me"
                      
            }
        })
 



        
    })
  })