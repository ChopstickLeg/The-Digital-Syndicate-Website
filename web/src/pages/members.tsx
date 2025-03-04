import { useParams } from "react-router-dom"

const Members = () => {
    const {memberName} = useParams()
  return (
    <>
    {
        memberName ? (
            <div>
                <label>{memberName}</label>
            </div>
        ) : (
            <p>No member name present</p>
        )
    }
    </>
  )
}

export default Members