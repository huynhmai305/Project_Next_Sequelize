import Head from 'next/head';
import React, { Component } from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';


class Layout extends Component {
    render() {
        return (
            <div>
                <Head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <title>React App with NextJS Framework</title>
                    <meta name="description" content=""/>
                    <meta name="author" content=""/>
                    <meta name="theme-color" content="#000000" />
                    <link href="/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
                    <link href="/static/css/modern-business.css" rel="stylesheet"/>
                    <script src="/static/vendor/jquery/jquery.min.js"></script>
                    <script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                   
                  
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"/>
                    <link href="/static/css/style.css" rel="stylesheet"/>
                </Head>
                <Navigation/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default Layout;