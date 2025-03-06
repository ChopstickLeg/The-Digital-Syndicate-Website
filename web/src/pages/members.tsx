import { useParams } from "react-router-dom";

const Members = () => {
  const { memberName } = useParams();
  console.log(memberName)
  return (
    <>
      {memberName ? (
        <>
          <title>{memberName}</title>
          <div>
            <label>{memberName}</label>
          </div>
        </>
      ) : (
        <>
          <title>Members</title>
          <p>No member name present</p>
        </>
      )}
    </>
  );
};

export default Members;
