const heading = React.createElement(
    "h1",
    {
      id: "title",
      class:'classname'
    },
    "Heading 1"
  );

  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
      class:'classname'
    },
    "Heading 2"
  );

  const dive = React.createElement("div",{
      id:"container"
  },[heading,heading2])
  console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  console.log("root", root);
  // passinh react element in the root
  // setTimeout(() => {
  // }, 5000);
  root.render(dive);