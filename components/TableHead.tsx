import Image from "next/image";

const TableHead = ({ text, image, setFilter }) => {
  return (
    <td>
      <div className="heading-item" onClick={setFilter}>
        <p>{text}</p>
        {image && <Image {...image} alt="filter-Results-Button" />}
      </div>
    </td>
  );
};

export default TableHead;
