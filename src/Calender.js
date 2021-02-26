import React from 'react';

const Calender =()=>{
    return(
        <div>
        <section className="content-header offset-md-2">
      <div className="container-fluid">
        <div className="row mb-2 d-flex justify-content-between">
          <div className="col">
            <h1>Calendar</h1>
          </div>
          <div className='col'><p className='text-center text-info'><small>Refresh if Calendar not loaded yet !</small></p></div>
          <div className="col">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Calendar</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section className="content offset-md-3">
      <div className="container-fluid">
                <div className='col-md-8'>
                <div className="form-group">
                  {/* <label>Date range:</label> */}

                  <div className="input-group">
                    <input type="text" placeholder='Enter Date Range' className="form-control float-right" id="reservation" />
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="far fa-calendar-alt"></i>
                      </span>
                    </div>
                  </div>
                </div>
                </div>
        <div className="row">
          <div className="col-md-8">
            <div className="card card-primary">
              <div className="card-body p-0">
                <div id="calendar"></div>
              </div>
            </div>
          </div>

           <div className="col-md-3 mt-md-n5">
            <div className="sticky-top mb-3">
              <div className="card">
                <div className="card-header">
                  <h5 className="text-center">Filters</h5>
                </div>
                <div className="card-body">
                  <div id="external-events">
                    <button className='btn btn-primary my-3 btn-block btn-sm fc-today-button'>Today</button>
                    <button className='btn btn-outline-secondary my-3 btn-block btn-sm'>Last 7 days</button>
                    <button className='btn btn-outline-secondary my-3 btn-block btn-sm'>Last Week</button>
                    <button className='btn btn-outline-secondary my-3 btn-block btn-sm'>Last Month</button>
                    <button className='btn btn-outline-secondary my-3 btn-block btn-sm'>Last 60 days</button>
                    {/* <button className='btn btn-primary btn-block btn-sm'>June</button>
                    <button className='btn btn-primary btn-block btn-sm'>July</button>
                    <button className='btn btn-primary btn-block btn-sm'>August</button>
                    <button className='btn btn-primary btn-block btn-sm'>September</button>
                    <button className='btn btn-primary btn-block btn-sm'>October</button>
                    <button className='btn btn-primary btn-block btn-sm'>November</button>
                    <button className='btn btn-primary btn-block btn-sm'>December</button> */}
                    {/* <div className="checkbox">
                      <label for="drop-remove">
                        <input type="checkbox" id="drop-remove" />
                      </label>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Create Event</h3>
                </div> */}
                {/* <div className="card-body">
                  <div className="btn-group" style={{width: '100%', marginBottom: '10px'}}>
                   
                    <ul className="fc-color-picker" id="color-chooser">
                      <li><a className="text-primary" href="#"><i className="fas fa-square"></i></a></li>
                      <li><a className="text-warning" href="#"><i className="fas fa-square"></i></a></li>
                      <li><a className="text-success" href="#"><i className="fas fa-square"></i></a></li>
                      <li><a className="text-danger" href="#"><i className="fas fa-square"></i></a></li>
                      <li><a className="text-muted" href="#"><i className="fas fa-square"></i></a></li>
                    </ul>
                  </div>
                  <div className="input-group">
                    <input id="new-event" type="text" className="form-control" placeholder="Event Title" />

                    <div className="input-group-append">
                      <button id="add-new-event" type="button" className="btn btn-primary">Add</button>
                    </div>
                  </div>
                </div> 
              </div>*/}
            </div>
          </div>
        </div>
       
      </div>
    </section>
    </div>
    )
}
export default Calender;