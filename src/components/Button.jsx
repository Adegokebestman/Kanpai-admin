/* eslint-disable react/prop-types */

const Button = ({ children, style, ...attributes}) => {
  return (
    <button type="button" {...attributes} style={style}
    className="border md:rounded-[44px] rounded-lg text-[10px] md:text-lg border-gray-800 px-4 py-2 ">
        {children}
    </button>
  )
}

export default Button