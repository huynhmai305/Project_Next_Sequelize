import React, { Component } from 'react';
import Link from 'next/link';
class DangKy extends Component {
    constructor(props) {
        super(props);
    }
   
    
    render() {
        return (
            <div className=" container-fluid login">
               
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <form className="form-regrester">
                            <div className="form-group">
                                <label htmlFor="exampleInputName">Họ tên</label>
                                <input type="text" className="form-control is-valid" id="exampleInputName" placeholder="Họ tên" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputAddress">Địa chỉ</label>
                                <input type="text" className="form-control is-valid" id="exampleInputAddress" placeholder="Địa chỉ" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPhone">Số điện thoại</label>
                                <input type="tel" className="form-control is-valid" id="exampleInputPhone" placeholder="Số điện thoại" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control is-valid" id="exampleInputEmail1" placeholder="Email" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password </label>
                                <div class="input-group mb-3">
                                    <input type="password" className="form-control is-valid" id="exampleInputPassword1" placeholder="Password" required/>
                                    <div class="input-group-append">
                                        <i class="fa fa-eye-slash" id="check" aria-hidden="true" ></i>
                                    </div>
                                </div>
                               
                            </div>

                            <Link href="/"><a className="btn btn-danger btn-block" >Đăng ký</a></Link>
                        </form>
                    </div>
                </div>
         </div>
        );
    }
}

export default DangKy;