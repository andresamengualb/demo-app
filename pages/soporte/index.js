import { useState } from 'react';
import { Card, CardBody, Row, Col, FormGroup, Label, Input, Table, Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';

const Soporte = () => {
  const [filter, setFilter] = useState({ fechaDesde: '', fechaHasta: '', id: '', estado: '' });
  const tickets = [
    { id: 1, fecha: '2021-12-01', usuario: 'Liam', asunto: 'Issue A', estado: 'Resuelto' },
    { id: 2, fecha: '2021-12-02', usuario: 'Steve', asunto: 'Issue B', estado: 'Abierto' },
    { id: 3, fecha: '2021-12-03', usuario: 'Jack', asunto: 'Issue C', estado: 'Cerrado' },
  ];
  const filtered = tickets.filter(
    (t) =>
      (!filter.fechaDesde || t.fecha >= filter.fechaDesde) &&
      (!filter.fechaHasta || t.fecha <= filter.fechaHasta) &&
      (!filter.id || t.id.toString().includes(filter.id)) &&
      (!filter.estado || t.estado === filter.estado)
  );

  // Compute ticket counts
  const totalTickets = tickets.length;
  const openCount = tickets.filter((t) => t.estado === 'Abierto').length;
  const resolvedCount = tickets.filter((t) => t.estado === 'Resuelto').length;
  const closedCount = tickets.filter((t) => t.estado === 'Cerrado').length;
  const [showNew, setShowNew] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [detailTicket, setDetailTicket] = useState(null);
  const toggleNew = () => setShowNew(!showNew);
  const toggleDetail = () => setShowDetail(!showDetail);
  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: '80%', position: 'relative' }}>
        {/* Summary cards */}
        <Row className="mb-3">
          <Col md="4">
            <Card
              className="text-center cursor-pointer border-warning"
              style={{ backgroundColor: '#fff3cd', color: '#856404' }}
              onClick={() => setFilter({ ...filter, estado: 'Abierto' })}
            >
              <CardBody>
                <h5>Abiertos</h5>
                <h2>{openCount}</h2>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card
              className="text-center cursor-pointer border-success"
              style={{ backgroundColor: '#d4edda', color: '#155724' }}
              onClick={() => setFilter({ ...filter, estado: 'Resuelto' })}
            >
              <CardBody>
                <h5>Resueltos</h5>
                <h2>{resolvedCount}</h2>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card
              className="text-center cursor-pointer border-danger"
              style={{ backgroundColor: '#f8d7da', color: '#721c24' }}
              onClick={() => setFilter({ ...filter, estado: 'Cerrado' })}
            >
              <CardBody>
                <h5>Cerrados</h5>
                <h2>{closedCount}</h2>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Card className="mb-4 border-info shadow-sm">
        <CardBody>
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label for="fechaDesde">Desde</Label>
                  <Input
                    type="date"
                    id="fechaDesde"
                    value={filter.fechaDesde}
                    onChange={(e) => setFilter({ ...filter, fechaDesde: e.target.value })}
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label for="fechaHasta">Hasta</Label>
                  <Input
                    type="date"
                    id="fechaHasta"
                    value={filter.fechaHasta}
                    onChange={(e) => setFilter({ ...filter, fechaHasta: e.target.value })}
                  />
                </FormGroup>
              </Col>
              <Col md="2">
                <FormGroup>
                  <Label for="id">ID</Label>
                  <Input
                    type="text"
                    id="id"
                    value={filter.id}
                    onChange={(e) => setFilter({ ...filter, id: e.target.value })}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label for="estado">Estado</Label>
                  <Input
                    type="select"
                    id="estado"
                    value={filter.estado}
                    onChange={(e) => setFilter({ ...filter, estado: e.target.value })}
                  >
                    <option value="">Todos</option>
                    <option>Resuelto</option>
                    <option>Abierto</option>
                    <option>Cerrado</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Card className="border-info shadow mb-5" style={{ overflow: 'auto' }}>
          <CardBody>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th><strong>ID</strong></th>
                  <th><strong>Fecha</strong></th>
                  <th><strong>Usuario</strong></th>
                  <th><strong>Asunto</strong></th>
                  <th><strong>Estado</strong></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((t) => (
                  <tr key={t.id} className="cursor-pointer" onClick={() => { setDetailTicket(t); setShowDetail(true); }}>
                    <td>{t.id}</td>
                    <td>{t.fecha}</td>
                    <td>{t.usuario}</td>
                    <td>{t.asunto}</td>
                    <td>
                      <span style={{
                        backgroundColor:
                          t.estado === 'Resuelto' ? '#d4edda' :
                            t.estado === 'Abierto' ? '#fff3cd' : '#f8d7da',
                        color:
                          t.estado === 'Resuelto' ? '#155724' :
                            t.estado === 'Abierto' ? '#856404' : '#721c24',
                        padding: '0.25em 0.5em',
                        borderRadius: '0.25rem',
                      }}>
                        {t.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
        {/* Create ticket button */}
        <Button color="primary" className="position-fixed" style={{ bottom: '20px', right: '20px' }} onClick={toggleNew}>
          Crear ticket
        </Button>
        {/* New ticket drawer */}
        <Offcanvas isOpen={showNew} toggle={toggleNew} direction="end">
          <OffcanvasHeader toggle={toggleNew}>Nuevo Ticket</OffcanvasHeader>
          <OffcanvasBody>
            <FormGroup>
              <Label>Asunto</Label>
              <Input type="text" />
            </FormGroup>
            <FormGroup>
              <Label>Mensaje</Label>
              <Input type="textarea" />
            </FormGroup>
            <FormGroup>
              <Label>Archivo adjunto</Label>
              <Input type="file" />
            </FormGroup>
            <Button color="success">Enviar</Button>
          </OffcanvasBody>
        </Offcanvas>
        {/* Ticket detail drawer */}
        <Offcanvas isOpen={showDetail} toggle={toggleDetail} direction="end">
          <OffcanvasHeader toggle={toggleDetail}>Historial Ticket</OffcanvasHeader>
          <OffcanvasBody>
            {/* TODO: render detailTicket history */}
            <FormGroup>
              <Label>Nuevo mensaje</Label>
              <Input type="textarea" />
            </FormGroup>
            <FormGroup>
              <Label>Archivo adjunto</Label>
              <Input type="file" />
            </FormGroup>
            <Button color="primary">Agregar</Button>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Soporte;
