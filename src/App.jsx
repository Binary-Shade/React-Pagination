import { useState, useEffect } from "react";
import Images from "./components/Images";
import Header from "./components/Header";
import ReactPaginate from 'react-paginate';

function App() {
  const [images, setImages] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setImages(data.products);
      console.log(data);
    }
    fetchImages();
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(images.slice(itemOffset, endOffset));
  }, [itemOffset, itemsPerPage, images]);

  const pageCount = Math.ceil(images.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % images.length;
    setItemOffset(newOffset);
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
  };

  return (
    <div className="container">
      <Header />
      <Images images={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        containerClassName={"pagination"}
        activeClassName={"active"}
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
      />
    </div>
  );
}

export default App;
