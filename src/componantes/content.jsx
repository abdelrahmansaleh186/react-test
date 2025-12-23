// content.jsx
import data from "./data/data.json";
import { useState } from "react";
// variable to start count the new id
let Nextid = 10;

export default function Content() {
  // card styles (kept inline where you used them)

  const textstyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#535bf2",
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "1rem",
    padding: "1rem",
    background: "#00fcfc7c",
    border: "2px solid #1f4647a4",
    borderRadius: "5rem 0rem",
  };
  const inputstyles = {
    background: "#f0f1f1b0",
    padding: ".5rem",
    margin: "1rem",
    border: "2px solid #0065fcff",
    borderRadius: "1rem  0rem",
  };

  const [Arraydevices, Setarray] = useState(data.devices); //array to the devices
 
  const [Newname, Setname] = useState(""); //add name
  const [Newbrand, Setnewbrand] = useState("");
  const [Error, Seterror] = useState(""); //error massege
  const [form, Setform] = useState(null); //to display the form
  const [Editename, Setedit] = useState("");

  function Addname() {
    Setarray([...Arraydevices, { id: Nextid, name: Newname, brand: Newbrand }]);
    Nextid++;
    Setname("");
    Setnewbrand("");
  }

  function Handledeletebtn(id) {
    Setarray(Arraydevices.filter((device) => device.id !== id));
  }

  function Handlingedit(id) {
    Setarray(
      Arraydevices.map((device) =>
        device.id === id ? { ...device, name: Editename } : device,
      ),
    );
  }

  function Inputreq() {
    if (Newname.trim() === "") {
      Seterror("Input is required");
    } else {
      Seterror("");
      Addname();
    }
  }

  return (
    <>
      <div className="card-animated glow-effect" >
        <h1 className="title-animated">list of Devices</h1>
        <div className="cards-container">
          {Arraydevices.map((device) => (
            <div key={device.id} className="device-item">
              <h3 className="text-animated" style={textstyles}>
                {device.brand}
              </h3>
              <p className="text-animated" style={textstyles}>
                {device.name}
              </p>

              {form === device.id && (
                <form
                  className="form-animated"
                  onSubmit={(e) => {
                    e.preventDefault();
                    Handlingedit(device.id);
                    Setform(null);
                  }}
                >
                  <input
                    className="input-animated"
                    style={inputstyles}
                    type="text"
                    value={Editename}
                    onChange={(e) => Setedit(e.target.value)}
                  />
                  <button className="btn-primary" type="submit">
                    save
                  </button>
                  <button
                    className="btn-secondary"
                    type="button"
                    onClick={() => Setform(null)}
                  >
                    close
                  </button>
                </form>
              )}

              <button
                className="btn-primary"
                onClick={() => Setform(device.id)}
              >
                edit
              </button>
              <button
                className="btn-danger"
                onClick={() => Handledeletebtn(device.id)}
              >
                delete
              </button>
            </div>
          ))}
        </div>

        <br />
        <div>
          <input
            id="inbut"
            className="input-animated"
            style={inputstyles}
            type="text"
            placeholder="Enter device name"
            value={Newname}
            onChange={(e) => Setname(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") Inputreq();
            }}
          />
          <input
            id="inbutbrand"
            className="input-animated"
            style={inputstyles}
            type="text"
            placeholder="Enter device brand"
            value={Newbrand}
            onChange={(e) => Setnewbrand(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") Inputreq();
            }}
          />
          <br />
          {Error && <p className="error-animated">{Error}</p>}
          <button className="btn-primary" onClick={Inputreq}>
            add device
          </button>
        </div>
      </div>

  
      <div className="card-animated glow-effect" >
        <h1 className="title-animated">list of perfumes</h1>
       

      </div>
      <div className="card-animated glow-effect" >
        <h1 className="title-animated">list of customers</h1>
      </div>

      <div  className="card-animated glow-effect"  >
        <h1 className="title-animated">list of orders</h1> <br />
      </div>
      <div  className="card-animated glow-effect"  >
        <h1 className="title-animated">list of categories</h1> <br />
      </div>
      <div  className="card-animated glow-effect"  >
        <h1 className="title-animated">list of employees</h1> <br />
      </div>
      <div  className="card-animated glow-effect"  >
        <h1 className="title-animated">list of stores</h1> <br />
      </div>
      <div  className="card-animated glow-effect"  >
        <h1 className="title-animated">list of payments</h1> <br />
      </div>
      <div  className="card-animated glow-effect"  >
        <h1 className="title-animated">list of employees</h1> <br />
      </div>
      <div  className="card-animated glow-effect"  >
        <h1 className="title-animated">list of employees</h1> <br />
      </div>
      <div  className="card-animated glow-effect"  >
        <h1 className="title-animated">list of employees</h1> <br />
      </div>
      <div  className="card-animated glow-effect"  >
        <h1 className="title-animated">list of employees</h1> <br />
      </div>
      <div  className="card-animated glow-effect"  >
        <h1 className="title-animated">list of employees</h1> <br />
      </div>
      <div  className="card-animated glow-effect"  >
        <h1 className="title-animated">list of employees</h1> <br />
      </div>
    </>
  );
}
