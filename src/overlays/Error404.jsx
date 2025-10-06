/** Error page for when user tries to access a page that is not found */
export default function Error404() {
  return (
    <div id="error">
      <div className="heading">
        <h1>SHOP.AUG.SERVICES</h1>
        <p>404: Not Established</p>
        <div>
          <p className="description">
            Unable to locate the requested URL.
            <br />
            For any questions or concerns, contact us.
          </p>
        </div>
        <ul className="itemslist">
          <li className="item onlyitem">
            <h1>Shop@aug.services</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}
