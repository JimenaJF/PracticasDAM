// import TableItem from "../molecules/TableItem";
// import TableItemOpened from "../molecules/TableItemOpened";

// export default function TableGrid({ items }: { items: any[] }) {
//   return (
//     <>
//       {items.map((item, index) => (
//         item.type === "normal" ? (
//           <tr key={index} className="tr_mail">
//             <TableItem {...item} />
//           </tr>
//         ) : item.type === "opened" ? (
//           <tr key={index} className="tr_mail">
//             <TableItemOpened subject={item.subject} body={item.body} />
//           </tr>
//         ) : item.type === "previous" ? (
//           <tr key={index} className="tr_mail" id="span3">
//             <td colSpan={3}></td>
//             <td className="previous_msg">{item.col3}</td>
//           </tr>
//         ) : (
//           <tr key={index} className="tr_mail" id="span2">
//             <td colSpan={2}></td>
//             <td colSpan={2} className="previous_msg">{item.col2}</td>
//           </tr>
//         )
//       ))}

//     </>
//   );
// }
