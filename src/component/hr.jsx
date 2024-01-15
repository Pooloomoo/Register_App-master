import { Form, useLoaderData, useFetcher, } from "react-router-dom";
import { getContact, updateContact } from "../contacts";

export async function loader({params}) {
  const contact = await getContact(params.contactId);
  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { contact };
}

export async function action({ request, params }) {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}

function hr(props) {
    const { index, data } = props;

    // let status = index % 2;
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.item1}</td>
            <td>{data.item2}</td>
            <td>{data.item3}</td>
            <td>{data.item4}</td>
            <td>
                <Form action="edit">
                    <button className="btn btn-warning text-light d-md-block" type="submit">Edit</button>
                </Form>
                <Form
                    method="post"
                    action="destroy"
                    onSubmit={(event) => {
                        if (
                            !confirm(
                                "Please confirm you want to delete this record."
                            )
                        ) {
                            event.preventDefault();
                        }
                    }}
                >
                    <button className="btn btn-danger btn-sm" type="submit">Delete</button>
                </Form></td>
        </tr>
    )
}

export default hr;