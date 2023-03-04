package com.DigitalContentV2.DigitalContentv2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.DigitalContentV2.DigitalContentv2.facadeImp.Cardao;
import com.DigitalContentV2.DigitalContentv2.facadeImp.Entregadao;
import com.DigitalContentV2.DigitalContentv2.modelo.Car_items;
import com.DigitalContentV2.DigitalContentv2.modelo.Entrega;

@RequestMapping("/dom")
@Controller
public class EntregaController {

	@Autowired
	private Entregadao entregadao;
	
	@Autowired
	private Cardao car_items;

	@GetMapping("/entregas")
	public String allBarrio(Model modelo) {
		List<Entrega> lstEn = this.entregadao.encontrarTodo();
		modelo.addAttribute("listaCar", car_items);
		modelo.addAttribute("listaEn", lstEn);
		return "ADomicilios/pedidos";
	}
}
