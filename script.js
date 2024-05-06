const map=L.map('map').setView([22.9074872,79.07306671],5);
const tileUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution= '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by Rishi';
const tiles=L.tileLayer(tileUrl,{attribution});
tiles.addTo(map);
const clayer=L.circle([22.9074872,79.07306671],{radius:2000,color:'red'});
clayer.addTo(map);


const bounds=[[54.559322,-5.767822],[56.1210604,-3.021240]]
const rectangle=L.rectangle(bounds);
rectangle.addTo(map)



const btriangle=[[25.774,-80.19],[18.466,-66.118],[32.321,-64.757]];

const polygon=L.polygon(btriangle)
polygon.addTo(map)
      



const latlngs = [[45.51, -122.68], [37.77, -122.43],[34.04,-118.2]];
 const polyline=L.polyline(latlngs);
 polyline.addTo(map);




//  const cmark=L.circleMarker([18.920675417289807,72.829592788802635],{  radius:100, color:'coral'});
//  cmark.addTo(map)


const icon=L.icon({
    iconUrl:'bakugo.webp',
    iconSize:[50,50],
})

 L.marker([26.401530,80.349150],{
    icon
 }).addTo(map).bindPopup("bakugo")


L.marker([18.401530,80.349150],{
    icon
 }).addTo(map).bindPopup("BAKUGO");
 
function generateList()
{
const ul=document.querySelector('.list');
storeList.forEach((shop)=>{
    const li=document.createElement('li');
    const div=document.createElement('div');
    const a=document.createElement('a');
    const p=document.createElement('p');
    a.addEventListener('click',()=>{
        flying(shop);
    })
    div.classList.add('shop-item');
    a.innerText=shop.properties.name;
    a.href='#';
    p.innerText=shop.properties.address;
    div.appendChild(a)
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);
});

}
generateList();
 function make(shop)
 { 
   return `
   <div>
   <h3>
   ${shop.properties.name}

   </h3>
   <P>
    ${shop.properties.address}
   </P>
   <div class="phone-Number>
   <a href="tel:${shop.properties.telephone}</a>
   </div>
   </div>
   `
 }

function onEachFeature(feature,layer)
{
     layer.bindPopup(make(feature),{
        closeButton:false,offset:L.point(0,-9)
     })
}
var shopsLayes=L.geoJSON(storeList,{
    onEachFeature:onEachFeature,
    pointToLayer:function(Feature,latlng){
        return L.marker(latlng,{
            
        });
    
    }
});
shopsLayes.addTo(map)

function flying(store){
    let lat=store.geometry.coordinates[1];
    let lng=store.geometry.coordinates[0];
    map.flyTo([lat,lng],14,{
        animate:1
    })

}
