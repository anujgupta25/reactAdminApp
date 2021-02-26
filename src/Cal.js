import { DateRangePicker } from 'react-date-range';
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import './ThemeDefault.css';
import './styles.css';
import { addDays } from 'date-fns';
import { useState } from 'react';

const Cal =()=>{
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);
      
      return(
       <div className=' mt-4 offset-md-3'>
            <DateRangePicker
            editableDateInputs={true}
            onChange={item => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
        
            direction="horizontal"
      />
       </div>
      )
}

export default Cal;



// .rdrDefinedRangesWrapper:after {
//     content: 'Filter';
//     position: absolute;
//     top: -47px;
//     background: royalblue;
//     padding: 8px 80px;
//     color: white;
//     width: 100%;
//     font-weight: 500;
//     border-radius: 12px;
//     font-size: medium;
// }