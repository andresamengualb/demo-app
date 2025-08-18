import { useState, useEffect, useRef } from 'react';
import { Card, CardBody, Row, Col, FormGroup, Label, Input, Table } from 'reactstrap';

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

  const onScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 5 && visibleCount < allOps.current.length) {
      setVisibleCount((prev) => prev + 20);
    }
  };

  return (
    <div className="justify-content-center">
      <div>
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

        <Card
          className="border-primary shadow mb-5"
          style={{ maxHeight: '400px', overflow: 'auto' }}
          onScroll={onScroll}
        >
          <CardBody>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th><strong>ID</strong></th>
                  <th><strong>Usuario</strong></th>
                  <th><strong>Estado</strong></th>
                  <th><strong>Documento</strong></th>
                </tr>
              </thead>
              <tbody>
                {ops.map((op) => (
                  <tr key={op.id}>
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
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Operaciones;
