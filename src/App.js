import React, { Component } from "react";
import { Nav, Navbar, FormControl, Form, Button, Container, Row, Col, Tabs, Tab, Breadcrumb, Spinner, NavDropdown, Table, ProgressBar, Pagination, OverlayTrigger, Popover, Tooltip } from "react-bootstrap";

class App extends Component {

  render() {
    const popover =
      <Popover>
        <Popover.Header as="h3">Informasi Website</Popover.Header>
        <Popover.Body>Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olaharaga</Popover.Body>
      </Popover>

    const tooltip = 
      <Tooltip>Akses Sport V1.0</Tooltip>

    return (
      <div>
        <Navbar bg="dark" className="p-2">
          <Navbar.Brand style={{ color: "white" }}>Akses Sport</Navbar.Brand>
          <Nav>
            <Nav.Item >
              <Nav.Link className="text-secondary">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-secondary">Berita</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-secondary"> Live Scores</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Piala & Liga">
              <NavDropdown.Item>Bundesliga</NavDropdown.Item>
              <NavDropdown.Item>Premiere League</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link className="text-secondary">Transfer Pemain</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="text-secondary">Tim</Nav.Link>
            </Nav.Item>
          </Nav>
          <Form className="d-flex ms-auto">
            <FormControl type="search" placeholder="Search"></FormControl>
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <Container>
          <Row>
            <Col md={{ span: 4 }} className=" ms-auto">
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Liga Inggris</Breadcrumb.Item>
                <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 4 }}><h4>Rumor Transfer Pemain</h4></Col>
            <Col md={{ span: 4 }} className="d-flex ms-auto ">
              <Spinner className="ms-auto" animation="border" variant="success" />
              <Spinner animation="grow" variant="success" />
            </Col>
          </Row>
          <Row>
            <Col className="my-5">
              <Tabs className="d-flex justify-content-evenly" defaultActiveKey="semua">
                <Tab eventKey="semua" title="Semua Transfer">
                  <Table className="mt-3">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nama Pemain</th>
                        <th>Tim</th>
                        <th>Transfer</th>
                        <th>Proses Transfer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>MAROUANE FELLAINI</td>
                        <td>MANCHESTER UNITED</td>
                        <td>SHANDONG LUNENG</td>
                        <td><ProgressBar animated now={85} label="85%"></ProgressBar></td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>LUIS NANI</td>
                        <td>SPORTING CP</td>
                        <td>ORLANDO CITY</td>
                        <td><ProgressBar animated now={55} label="55%"></ProgressBar></td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>MAREK HAMSIK</td>
                        <td>NAPOLI</td>
                        <td>DALIAN YIFANG</td>
                        <td><ProgressBar animated now={95} label="95%"></ProgressBar></td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>SARDAR AZMOUN</td>
                        <td>RUBIN KAZAN</td>
                        <td>ZENIT ST PETERSBURG</td>
                        <td><ProgressBar animated now={100} label="100%"></ProgressBar></td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>MICHY BATSHUAYI</td>
                        <td>CHELSEA</td>
                        <td>CRYSTAL PALACE</td>
                        <td><ProgressBar animated now={50} label="50%"></ProgressBar></td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>LUCAS PIAZON</td>
                        <td>CHELSEA</td>
                        <td>CHIEVO</td>
                        <td><ProgressBar animated now={100} label="100%"></ProgressBar></td>
                      </tr>
                    </tbody>
                  </Table>
                  <Pagination className="mt-4">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item>{14}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                  </Pagination>
                </Tab>
                <Tab eventKey="inggris" title="Liga Primer Inggris">INI 2</Tab>
                <Tab eventKey="italia" title="Serie A"></Tab>
                <Tab eventKey="prancis" title="Divisi Primera"></Tab>
                <Tab eventKey="jerman" title="Bundesliga"></Tab>
                <Tab eventKey="indonesia" title="Liga 1 Indonesia"></Tab>
              </Tabs>

              <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button className="mx-1">Informasi</Button>
              </OverlayTrigger>

              <OverlayTrigger trigger="click" placement="bottom" overlay={tooltip}>
                <Button>Versi Website</Button>
              </OverlayTrigger>

            </Col>
          </Row>



        </Container>
      </div>


    );
  }
}

export default App;