interface IFlags {
    flag: string
}

const FlagImage:React.FC<IFlags> = ({flag}) => {
    return (
        <img
        src={flag}
        alt="" className="w-96 h-80" />
    )
}

export default FlagImage;