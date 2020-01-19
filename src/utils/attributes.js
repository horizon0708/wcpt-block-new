


export const renderTextAttribute = (attrs, props) => (key, Comp) => {
  if(typeof attrs !== "object") {
    return null
  }

  if(!attrs.hasOwnProperty(key) || !props.hasOwnProperty("attributes")) {
    return null
  }

  const {attributes } = props
  if(!attributes.hasOwnProperty(key)) {
    return null
  }

  // depending on type, cast it?
  let {type, selector} = attrs[key]
  if(selector[0] === "#") {
   selector = selector.slice(1)
  }
  
  if(Comp) {
    return <Comp id={selector}>
      {attributes[key]}
    </Comp>
  } 
  return <span id={selector}>
    {attributes[key]}
  </span>
}