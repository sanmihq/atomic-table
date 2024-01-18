import { Element } from "@/types/types";
import ElementCard from "./ElementCard";

type PeriodicTableProps = {
  elements: Element[];
};

export default function PeriodicTable({ elements }: PeriodicTableProps) {
  const renderCell = (
    element: Element | undefined,
    rowIndex: number,
    colIndex: number
  ) => {
    const is8thRow = rowIndex === 7;
    const isLastColumn = colIndex === maxCol - 1;
    const cellContent = element ? (
      <ElementCard element={element} />
    ) : is8thRow ? (
      <td key={colIndex} className="h-[50px]" />
    ) : null;

    const cellClassName = `border-collapse ${
      element ? "border border-gray-700" : ""
    } ${rowIndex === 0 ? "border-t-0" : ""} ${
      colIndex === 0 ? "border-l-0" : ""
    } ${isLastColumn ? "border-r-0" : ""} ${
      rowIndex === maxRow - 1 ? "border-b-0" : ""
    }`;

    return (
      <td key={colIndex} className={cellClassName}>
        {cellContent}
      </td>
    );
  };

  const renderRow = (rowIndex: number) => {
    const cells = Array.from({ length: maxCol }, (_, colIndex) => {
      const element = elements.find(
        (e) =>
          e.row_position === rowIndex + 1 && e.col_position === colIndex + 1
      );
      return renderCell(element, rowIndex, colIndex);
    });

    return <tr key={rowIndex}>{cells}</tr>;
  };

  const maxRow = Math.max(...elements.map((element) => element.row_position));
  const maxCol = Math.max(...elements.map((element) => element.col_position));

  const renderTable = () => {
    return Array.from({ length: maxRow }, (_, rowIndex) => renderRow(rowIndex));
  };

  return (
    <div>
      <table>
        <tbody>{renderTable()}</tbody>
      </table>
    </div>
  );
}
