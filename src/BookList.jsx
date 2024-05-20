import React from 'react'
import Book from './Book';
const data= [
{
    title:"Let Us c++",
    author:"Yashwant Kanikar",
    imglink:"https://m.media-amazon.com/images/I/71Q0U-8lxJS.SY466.jpg",
    price:189.5,
},
{
    title:"A Pocket Guide  Six Systems Indian Philosophy",
    author:"Moloy Kumar Bannerjee",
    imglink:"https://m.media-amazon.com/images/I/81sVLZYWmjL.AC_UY327_FMwebp_QL65.jpg",
    price:452.5,
},
{
    title:"Indradhanush",
    author:" Mridula Gupta ",
    imglink:"https://m.media-amazon.com/images/I/810U4T97LqL.AC_UY327_FMwebp_QL65.jpg",
    price:102.5,
},
{
    title:"Now We Are Six (Winnie-the-Pooh)",

    author:"A. A. Milne and E. H. Shepard",
    imglink:"https://m.media-amazon.com/images/I/81I9wmO8uZL.AC_UY327_FMwebp_QL65.jpg",
    price:586.5,
},
{
    title:"Execution: The latest new gripping Tudor historical crime thriller ",
    author:" S. J. Parris  ",
    imglink:"https://m.media-amazon.com/images/I/71Q0U-8lxJS.SY466.jpg",
    price:405.5,
},
{
    title:"Top Amazon Seller tools you must know",
    author:"Nivetha Muralidharan  ",
    imglink:"https://m.media-amazon.com/images/I/8184Jw0RguL.AC_UY327_FMwebp_QL65.jpg",
    price:100.5,
}
]

const BookList = () => {
    return (
        <div className='booklist'>
            <Book 
            title={data[0].title}
            author={data[0].author}
            imglink={data[0].imglink}
            price={data[0].price}
             />
             <Book {...data[1]}/>
             <Book {...data[2]}/>
             <Book {...data[3]}/>
             <Book {...data[4]}/>
             <Book {...data[5]}/>

        </div>
    );
}
//const BookList=() =>{
//return{
//<div classsName="booklist">
//<book {,,,bookData[0]} />;
//{bookData.map((b))}=>{
   // return<book{,,,b} />
//})}
//</div>

export default BookList;