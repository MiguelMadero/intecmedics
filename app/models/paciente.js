import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  calle: DS.attr('string'),
  colonia: DS.attr('string'),
  ciudadEstado: DS.attr('string'),
  telefono: DS.attr('string'),
  telefono2: DS.attr('string'),
  estadoCivil: DS.attr('string'),
  enviadoPor: DS.attr('string'),
  afiliacion: DS.attr('string'),
  empleado: DS.attr('string'),
  fechaIngreso: DS.attr('date'),
  edad: DS.attr('number'),
  fechaNacimiente: DS.attr('date'),
  sexo: DS.attr('string'),
  procedencia: DS.attr('string'),
  motivo1: DS.attr('string'),
  motivo2: DS.attr('string'),
  ocupacion: DS.attr('string'),
  hasFactura: DS.attr('boolean')
});
