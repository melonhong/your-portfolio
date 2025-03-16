const Paginator = ({ totalPage }) => {
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {
            /* totalPage 수만큼 paginator 아이템 추가 */
            Array.from({ length: totalPage }, (_, i) => (
              <li key={i + 1} className="page-item">
                <a className="page-link" href={`/portfolio/main?page=${i + 1}`}>
                  {i + 1}
                </a>
              </li>
            ))
          }
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Paginator;
