import { useState } from 'react';

// To add Icon emblems? <FastForward />
// import FastForward from '../Icons/FastForward';

const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'HTML', 'CSS', 'Other'],
  },
  {
    category: 'Technologies',
    items: ['React', 'Node.js', 'Express', 'Git', 'GitHub'],
  },
  {
    category: 'Tools',
    items: ['VS Code', 'Insomnia', 'AUTOCAD', 'Photoshop'],
  },
  {
    category: 'Database',
    items: ['MySQL', 'MongoDB'],
  }
  {
    category: 'Soft Skills',
    items: ['Problem Solving', 'Teamwork', 'Communication', 'Adaptability'],
  },
];

const otherSkills = () => {
  const icon = <FastForward />;
  return (
    <>
      {otherSkills.map((skills) => (
        <ul
          key={skills.category}
          className='tech-list leading-loose'
        >
          <h3 className="font-['Source_Code_Pro'] font-semibold text-lg md:text-xl tracking-tighter">
            {skills.category}
          </h3>
      {skills.items.map((item) => (
        <li key={item}>
          {icon}
          {item}
        </li>
      ))}
        </ul>
      ))}
      </>
  );
};

//       function BucketForm(props) {
//   const [input, setInput] = useState('');
//       let [eagerness, setEagerness] = useState('');

//       const eagernessLevel = ['high', 'medium', 'low']

//   const handleSubmit = (e) => {
//         e.preventDefault();

//       if (!eagerness) {
//         eagerness = 'low';
//     }

//       props.onSubmit({
//         id: Math.random(Math.floor() * 1000),
//       text: input,
//       eagerness: eagerness,
//     });

//       setInput('');
//       setEagerness('');
//   };

//   const handleChange = (e) => {
//         setInput(e.target.value);
//   };

//       // First we check to see if "edit" prop exists. If not, we render the normal form
//       // If the prop "edit" exists, we know to render the update form instead
//       return !props.edit ? (
//       <div>
//         <form className="bucket-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Add to your bucket list"
//             value={input}
//             name="text"
//             className="bucket-input"
//             onChange={handleChange}
//           ></input>
//           <div className="dropdown">
//             <button className={`dropbtn ${eagerness}`}>
//               {eagerness || 'Priority'}
//             </button>
//             <div className="dropdown-content">
//               <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
//               <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
//               <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
//             </div>
//           </div>
//           <button className="bucket-button">Add bucket list item</button>
//         </form>
//       </div>
//       ) : (
//       <div>
//         <h3>Update entry: {props.edit.value}</h3>
//         <form className="bucket-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder={props.edit.value}
//             value={input}
//             name="text"
//             className="bucket-input"
//             onChange={handleChange}
//           ></input>
//           <div className="dropdown">
//             <button className={`dropbtn ${eagerness}`}>
//               {eagerness || 'Priority'}
//             </button>
//             <div className="dropdown-content">
//               <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
//               <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
//               <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
//             </div>
//           </div>
//           <button className="bucket-button">Update</button>
//         </form>
//       </div>
//       );
// }

      export default { Skills };
