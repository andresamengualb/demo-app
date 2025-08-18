import { useState } from 'react';
import { Card, CardBody, Row, Col, FormGroup, Label, Input, Table } from 'reactstrap';

const Soporte = () => {
  const [filter, setFilter] = useState({ fecha: '', id: '' });
  const tickets = [
    { id: 1, fecha: '2021-12-01', usuario: 'Liam', asunto: 'Issue A' },
    { id: 2, fecha: '2021-12-02', usuario: 'Steve', asunto: 'Issue B' },
    { id: 3, fecha: '2021-12-03', usuario: 'Jack', asunto: 'Issue C' },
  ];
  const filtered = tickets.filter(
    (t) =>
      (!filter.fecha || t.fecha === filter.fecha) &&
      (!filter.id || t.id.toString() === filter.id)
  );

  return (
    <>
      <Card className="mb-3">
        <CardBody>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label for="fecha">Fecha</Label>
                <Input
                  type="date"
                  id="fecha"
                  value={filter.fecha}
                  onChange={(e) => setFilter({ ...filter, fecha: e.target.value })}
                />
              </FormGroup>
            </Col>
            <Col md="6">
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
          </Row>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Table hover>
            <thead>
              <tr>
                <th><strong>ID</strong></th>
                <th><strong>Fecha</strong></th>
                <th><strong>Usuario</strong></th>
                <th><strong>Asunto</strong></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.fecha}</td>
                  <td>{t.usuario}</td>
                  <td>{t.asunto}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
};

export default Soporte;
