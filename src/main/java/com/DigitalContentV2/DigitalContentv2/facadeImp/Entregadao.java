package com.DigitalContentV2.DigitalContentv2.facadeImp;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.DigitalContentV2.DigitalContentv2.facade.IEntrega;
import com.DigitalContentV2.DigitalContentv2.modelo.Entrega;
import com.DigitalContentV2.DigitalContentv2.repository.CarRepository;
import com.DigitalContentV2.DigitalContentv2.repository.EntregaRepository;

@Transactional
@Service
public class Entregadao implements IEntrega{

	@Autowired
	private CarRepository carRepository;
	
	@Autowired
	private EntregaRepository entregaRepository;
	
	@Override
	public List<Entrega> encontrarTodo() {
		return this.entregaRepository.findAll();
	}

	@Override
	public void crear(Entrega entrega, Integer idUsuario) {
		carRepository.actOrdenCompra2(idUsuario, "Pendiente");
	}
 
	@Override
	public void actualizar(Entrega entrega) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void eliminar(Entrega entrega) {
		// TODO Auto-generated method stub
		
	}

}
