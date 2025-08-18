import { useState, useEffect, useRef } from 'react';
import { Card, CardBody, Row, Col, FormGroup, Label, Input, Table, Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap';
import { List, CheckCircle, RefreshCw, AlertCircle } from 'react-feather';

const Operaciones = () => {
  const allOps = useRef([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [ops, setOps] = useState([]);
  const [filter, setFilter] = useState({ desde: '', hasta: '', id: '', usuario: '', estado: '' });

  useEffect(() => {
    if (allOps.current.length === 0) {
      const temp = [];
      const estados = ['Procesando', 'Completado', 'Fallido'];
      for (let i = 1; i <= 100; i++) {
        const fecha = new Date(2021, 0, (i % 30) + 1).toISOString().slice(0, 10);
        temp.push({
          id: i,
          fecha,
          usuario: `User${i}`,
          estado: estados[i % 3],
          nombreDocumento: `Doc${i}.pdf`,
        });
      }
      allOps.current = temp;
    }
  const filtered = allOps.current.filter((op) => {
      return (
        (!filter.desde || op.fecha >= filter.desde) &&
        (!filter.hasta || op.fecha <= filter.hasta) &&
        (!filter.id || op.id.toString().includes(filter.id)) &&
        (!filter.usuario || op.usuario.includes(filter.usuario)) &&
        (!filter.estado || op.estado === filter.estado)
      );
    });
    setOps(filtered.slice(0, visibleCount));
  }, [visibleCount, filter]);

  // Summary counts
  const filteredAll = allOps.current;
  const totalCount = filteredAll.length;
  const completedCount = filteredAll.filter((op) => op.estado === 'Completado').length;
  const processingCount = filteredAll.filter((op) => op.estado === 'Procesando').length;
  const failedCount = filteredAll.filter((op) => op.estado === 'Fallido').length;

  const onScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 5 && visibleCount < allOps.current.length) {
      setVisibleCount((prev) => prev + 20);
    }
  };

  // Upload drawer state
  const [showUpload, setShowUpload] = useState(false);
  const toggleUpload = () => setShowUpload(!showUpload);
  // Detail drawer state
  const [showDetailOp, setShowDetailOp] = useState(false);
  const [detailOp, setDetailOp] = useState(null);
  const toggleDetailOp = () => setShowDetailOp(!showDetailOp);

  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: '80%' }}>
        {/* Summary cards */}
        <Row className="mb-3">
          <Col md="3">
            <Card className="text-center cursor-pointer border-info" style={{ backgroundColor: '#e2e3e5', color: '#383d41' }} onClick={() => { setFilter({ ...filter, estado: '' }); setVisibleCount(totalCount); }}>
              <CardBody>
                <List size={24} />
                <h5>Todos</h5>
                <h2>{totalCount}</h2>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="text-center cursor-pointer border-success" style={{ backgroundColor: '#d4edda', color: '#155724' }} onClick={() => { setFilter({ ...filter, estado: 'Completado' }); setVisibleCount(totalCount); }}>
              <CardBody>
                <CheckCircle size={24} />
                <h5>Completados</h5>
                <h2>{completedCount}</h2>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="text-center cursor-pointer border-warning" style={{ backgroundColor: '#fff3cd', color: '#856404' }} onClick={() => { setFilter({ ...filter, estado: 'Procesando' }); setVisibleCount(totalCount); }}>
              <CardBody>
                <RefreshCw size={24} />
                <h5>Procesando</h5>
                <h2>{processingCount}</h2>
              </CardBody>
            </Card>
          </Col>
          <Col md="3">
            <Card className="text-center cursor-pointer border-danger" style={{ backgroundColor: '#f8d7da', color: '#721c24' }} onClick={() => { setFilter({ ...filter, estado: 'Fallido' }); setVisibleCount(totalCount); }}>
              <CardBody>
                <AlertCircle size={24} />
                <h5>Fallidos</h5>
                <h2>{failedCount}</h2>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* Filters */}
        <Card className="mb-4 border-primary shadow-sm">
          <CardBody>
            <Row>
              <Col md="2">
                <FormGroup>
                  <Label for="desde">Desde</Label>
                  <Input
                    type="date"
                    id="desde"
                    value={filter.desde}
                    onChange={(e) => setFilter({ ...filter, desde: e.target.value })}
                  />
                </FormGroup>
              </Col>
              <Col md="2">
                <FormGroup>
                  <Label for="hasta">Hasta</Label>
                  <Input
                    type="date"
                    id="hasta"
                    value={filter.hasta}
                    onChange={(e) => setFilter({ ...filter, hasta: e.target.value })}
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
              <Col md="2">
                <FormGroup>
                  <Label for="usuario">Usuario</Label>
                  <Input
                    type="text"
                    id="usuario"
                    value={filter.usuario}
                    onChange={(e) => setFilter({ ...filter, usuario: e.target.value })}
                  />
                </FormGroup>
              </Col>
              <Col md="2">
                <FormGroup>
                  <Label for="estado">Estado</Label>
                  <Input
                    type="select"
                    id="estado"
                    value={filter.estado}
                    onChange={(e) => setFilter({ ...filter, estado: e.target.value })}
                  >
                    <option value="">Todos</option>
                    <option>Procesando</option>
                    <option>Completado</option>
                    <option>Fallido</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <Card className="border-primary shadow mb-5">
          <CardBody style={{ paddingBottom: '1rem' }}>
            <div style={{ maxHeight: '400px', overflow: 'auto' }} onScroll={onScroll}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th><strong>ID</strong></th>
                  <th><strong>Usuario</strong></th>
                  <th><strong>Estado</strong></th>
                  <th><strong>Documento</strong></th>
                  <th><strong>Acciones</strong></th>
                </tr>
              </thead>
              <tbody>
                {ops.map((op) => (
                  <tr key={op.id} className="cursor-pointer" onClick={() => { setDetailOp(op); setShowDetailOp(true); }}>
                    <td>{op.id}</td>
                    <td>{op.usuario}</td>
                    <td>
                      <span style={{
                        backgroundColor:
                          op.estado === 'Completado' ? '#d4edda' :
                          op.estado === 'Procesando' ? '#fff3cd' : '#f8d7da',
                        color:
                          op.estado === 'Completado' ? '#155724' :
                          op.estado === 'Procesando' ? '#856404' : '#721c24',
                        padding: '0.25em 0.5em',
                        borderRadius: '0.25rem',
                      }}>
                        {op.estado}
                      </span>
                    </td>
                    <td>{op.nombreDocumento}</td>
                    <td>
                      <Button color="link" onClick={(e) => { e.stopPropagation(); /* implement download */ }}>
                        <i className="bi bi-download"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            </div>
          </CardBody>
        </Card>
        {/* Upload button */}
        <Button color="primary" className="position-fixed" style={{ bottom: '20px', right: '20px' }} onClick={toggleUpload}>
          Subir documento
        </Button>
        <Offcanvas isOpen={showUpload} toggle={toggleUpload} direction="end">
          <OffcanvasHeader toggle={toggleUpload}>Subir Documento</OffcanvasHeader>
          <OffcanvasBody>
            <FormGroup>
              <Label>Archivo</Label>
              <Input type="file" />
            </FormGroup>
            <Button color="success">Subir</Button>
          </OffcanvasBody>
        </Offcanvas>
        {/* Detail drawer */}
        <Offcanvas isOpen={showDetailOp} toggle={toggleDetailOp} direction="end">
          <OffcanvasHeader toggle={toggleDetailOp}>Detalle Operación</OffcanvasHeader>
          <OffcanvasBody>
            {detailOp && (
              <div>
                <p><strong>ID:</strong> {detailOp.id}</p>
                <p><strong>Usuario:</strong> {detailOp.usuario}</p>
                <p><strong>Fecha:</strong> {detailOp.fecha}</p>
                <p><strong>Estado:</strong> {detailOp.estado}</p>
                {/* Aquí historial y errores */}
              </div>
            )}
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Operaciones;
