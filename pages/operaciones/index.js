import { useState, useEffect, useRef } from 'react';
import { Card, CardBody, Row, Col, FormGroup, Label, Input, Table } from 'reactstrap';

const Operaciones = () => {
  const allOps = useRef([]);
  const [visibleCount, setVisibleCount] = useState(20);
  const [ops, setOps] = useState([]);
  const [filter, setFilter] = useState({ desde: '', hasta: '', id: '', usuario: '' });

  useEffect(() => {
    if (allOps.current.length === 0) {
      const temp = [];
      for (let i = 1; i <= 100; i++) {
        const fecha = new Date(2021, 0, (i % 30) + 1).toISOString().slice(0, 10);
        temp.push({ id: i, fecha, usuario: `User${i}` });
      }
      allOps.current = temp;
    }
    setOps(allOps.current.slice(0, visibleCount));
  }, [visibleCount]);

  const onScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollTop + clientHeight >= scrollHeight - 5 && visibleCount < allOps.current.length) {
      setVisibleCount((prev) => prev + 20);
    }
  };

  return (
    <>
      <Card className="mb-3">
        <CardBody>
          <Row>
            <Col md="3">
              <FormGroup>
                <Label for="desde">Fecha desde</Label>
                <Input type="date" id="desde" value={filter.desde} onChange={(e) => setFilter({ ...filter, desde: e.target.value })} />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label for="hasta">Fecha hasta</Label>
                <Input type="date" id="hasta" value={filter.hasta} onChange={(e) => setFilter({ ...filter, hasta: e.target.value })} />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label for="id">ID</Label>
                <Input type="text" id="id" value={filter.id} onChange={(e) => setFilter({ ...filter, id: e.target.value })} />
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label for="usuario">Usuario</Label>
                <Input type="text" id="usuario" value={filter.usuario} onChange={(e) => setFilter({ ...filter, usuario: e.target.value })} />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card style={{ height: '400px', overflow: 'auto' }} onScroll={onScroll}>
        <CardBody>
          <Table hover>
            <thead>
              <tr>
                <th><strong>ID</strong></th>
                <th><strong>Fecha</strong></th>
                <th><strong>Usuario</strong></th>
              </tr>
            </thead>
            <tbody>
              {ops.map((op) => (
                <tr key={op.id}>
                  <td>{op.id}</td>
                  <td>{op.fecha}</td>
                  <td>{op.usuario}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
};

export default Operaciones;
