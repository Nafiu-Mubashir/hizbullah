export const Button = ({className, text}) => {
    return(
        <button type="button" className={`${className} text-white bg-[#29A529] focus:ring-4 focus:ring-blue-300 font-medium rounded text-[12px] px-5 py-2 flex gap-3 items-center`}>
          {text}
       </button>
    )
}