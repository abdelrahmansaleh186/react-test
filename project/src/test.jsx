// import { useState } from "react";
// import "./App.css";

// let Nextid = 5;

// function App() {
//   const [Newdevice, Setdevicename] = useState("");
//   const [Devices, Setdevices] = useState([
//     { id: 1, name: "iphone" },
//     { id: 2, name: "haway" },
//     { id: 3, name: "samsunge" },
//     { id: 4, name: "nokia" },
//   ]);

//   const [EditId, setEditId] = useState(null);
//   const [Editdevice, Setedit] = useState("");

//   function Handeleditclick(id) {
//     Setdevices(
//       Devices.map((device) =>
//         device.id === id ? { ...device, name: Editdevice } : device
//       )
//     );
//     setEditId(null);
//     Setedit("");
//   }

//   function Handeldeleteclick(id) {
//     Setdevices(Devices.filter((device) => device.id !== id));
//   }

//   function Adddevice() {
//     Setdevices([...Devices, { id: Nextid, name: Newdevice }]);
//     Nextid++;
//     Setdevicename("");
//   }

//   return (
//     <>
//       <ul>
//         {Devices.map((Device) => (
//           <li key={Device.id}>
//             {EditId === Device.id ? (
//               <>
//                 <input
//                   value={Editdevice}
//                   onChange={(e) => Setedit(e.target.value)}
//                 />
//                 <button onClick={() => Handeleditclick(Device.id)}>save</button>
//                 <button onClick={() => setEditId(null)}>cancel</button>
//               </>
//             ) : (
//               <>
//                 {Device.name}
//                 <br />
//                 <button onClick={() => Handeldeleteclick(Device.id)}>
//                   delete
//                 </button>
//                 <button
//                   onClick={() => {
//                     setEditId(Device.id);
//                     Setedit(Device.name);
//                   }}
//                 >
//                   edit
//                 </button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>

//       <hr />

//       <input
//         type="text"
//         value={Newdevice}
//         onChange={(e) => Setdevicename(e.target.value)}
//         placeholder="device name"
//       />
//       <button onClick={Adddevice}>add</button>
//     </>
//   );
// }

// export default App;



//fetch methods 


// import { useEffect, useState } from "react";

// export default function FetchData() {
//   const [content, setcontent] = useState([]);
//   useEffect(() => {
//     fetch("https://abdelrahmanapis.duckdns.org/api/data")
//       .then((res) => res.json())
//       .then((data) => {
//         setcontent(data.products);
//       })
//       .catch((err) => console.log("error", err));
//   }, []);
//   console.log(content);

//     return (
//         <>
//         <div>
//             <p>fetched data:</p>
//           {content.map((item) => (
//             <div key={item.id}>
//               <h3>{item.name}</h3>
//               <p>{item.description}</p>
//               <p>{item.price}</p>
//               <p>{item.image}</p>
//             </div>
//           ))}
//         </div>
        
//         </>
//     )
// }
