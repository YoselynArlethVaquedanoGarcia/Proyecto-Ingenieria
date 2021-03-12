function carritocompras(){
alert("Agregado al carrito de compras!");
}
$(document).ready(function(){
    $.ajax({
        url:"ajax/articulos.php?accion=listar",
        dataType:"json",
        success:function(res){
            console.log('el arreglo es:')
            console.log(res);
            var i=0;
                $('#vi_zoom_trigger_mask1').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[i].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[i].nombre}" mskuskip="false">`);
            $('#SummaryPanel1').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
									<div class="vi-swc-lsp">
											<div style="" class="">
									<h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[i].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
														<a class="it-sttl" data-mtdes="NEW Samsung Galaxy Tab E Lite 7&quot; Quad Core 8GB ROM WiFi BT Android White Tablet" data-mtsrclang="es-CO" href="#" onclick="return false;">
														mostrar título original</a>
														</span>
														</h1><!--[if IE 7]>
										<div id="vi-itt-filler"></div>
										<![endif]-->
										<h2 id="subTitle" class="it-sttl">
											<span data-mtdes="Ships fast! See our feedback!" data-mtsrclang="es-CO">Envío rápido! vea nuestra regeneración!</span>
															</h2>
									<!-- DO NOT change linkToTagId="rwid" as the catalog response has this ID set  -->
									<div class="vi-hdops-two-clmn-fix">			
										<div style="" class="vi-notify-new-bg-wrapper">
												<div class="vi-notify-new-bg-dTop" style=""> </div>
												<div id="vi_notification_new" class="vi-notify-new-bg-dBtm" style="top: -28px;"> 
													<img src="https://ir.ebaystatic.com/rs/v/tnj4p1myre1mpff12w4j1llndmc.png" width="11" height="12" class="vi-notify-new-img" alt="Artículo popular">
													<span style="font-weight:bold;">Se vendió 1 en la última hora</span>
												</div>
											</div>
										</div>		
									</div>
								<div class="it-rlBr it-rlBrd  it-rlBr500 ">
												</div>
										<span id="vi-lkhdr-itmTitl" class="u-dspn">${res[i].nombre}</span>
							</div>
									<div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
							
								<h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
								<form action="" method="post" name="viactiondetails">
									 <div class="c-std vi-ds3cont-box-marpad ">
									<div class="nonActPanel ">
									<div>
								<div class="u-flL lable">
									Estado:</div>
								<div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[i].estado}</div>
									</div>
							
							<!-- offscreen timer widget -->
										<!-- some comment -->
										<!-- volume pricing -->
												<div class="u-cb spcr"></div>
																<div>
								<!-- Label Section -->
								<div style="" class="u-flL lable">
											Precio por volumen:</div>
								<!-- Label Section ends -->
								<div class="vi-tiers u-flL">
									<div class="vi-tier-cls">
												<span class="vi-volume">1-1</span>
													<span class="vi-spacr"></span>
												<span class="vi-vprice">USD89.00</span>
												<span class="vi-smallSpacr"></span>
												<span class="vi-offset">(CADA UNO)</span>							
													</div>
										<div class="vi-tier-cls">
												<span class="vi-volume">2-2</span>
													<span class="vi-spacr"></span>
												<span class="vi-vprice">USD88.11</span>
												<span class="vi-smallSpacr"></span>
												<span class="vi-offset">(1% de descuento cada uno)</span>	
													</div>
										<div class="vi-tier-cls">
												<span class="vi-volume">3-3</span>
													<span class="vi-spacr"></span>
												<span class="vi-vprice">USD87.22</span>
												<span class="vi-smallSpacr"></span>
												<span class="vi-offset">(2% de descuento cada uno)</span>	
													</div>
										<div class="vi-tier-cls">
												<span class="vi-volume">4+</span>
													<span class="vi-spacr"></span>
												<span class="vi-vprice">USD86.33</span>
												<span class="vi-smallSpacr"></span>
												<span class="vi-offset">(3% de descuento cada uno)</span>	
													</div>
										</div>
							</div><!-- volume pricing ends -->
											<div class="u-cb spcr "></div>
							<div class="">
								<div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
								<div>		
									<div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
										<div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
											<img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
										</div>
										
										<input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
										
										<span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
													<span id="qtySubTxt">
															<span class="">
															Existencias limitadas</span>
														</span>
													<span class="vi-qty-vert-algn vi-qty-slash"> / </span>
											<span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
										<a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">16 vendidos</a></span>
									</span>
											
										
										<div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
										<!-- generating Id's array -->
										<div class="u-dspn"> 
											<b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
											<b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
											<b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
											<b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
											<b id="w1-12_qtyErr_4">Ingresa un número menor</b>
											<b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
											<b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
										</div>
									</div>
								</div>
								<div class="u-cb spcr"></div>
								</div>
							</div>
									<div class="actPanel ">	
									<div id="vi-orgPrc-container" style=" display:block; ">
									<div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
									<div class="u-cb  vi-VR-prcTmt-hide">
										<div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
								Precio de venta:</div><span id="orgPrc" class="notranslate ms-orp">
													${res[i].precio}</span>
												<a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
													<div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
														<div class="ms-olp-ttl">¿Qué significa este precio?</div>
														<div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
													</div>
												</div>
								</div>
								</div>
								<div id="vi-youSaveSTP-container" style=" display:block; ">
									<div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
									<div class="u-cb ms-as-rw vi-VR-prcTmt-hide">
										<div class="u-flL lable" id="youSaveSTP-lbl" style="">
								Ahorras:</div><span id="youSaveSTP" class="notranslate ms-as">
												USD110.99 (55%&nbsp;de descuento)</span>
							</div>
									</div>
								<div class="u-cb spcr  vi-bbox-spcr15 "></div>
							
											<div class="u-cb">
												<div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl">Ahora:</div>
													<div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">
										
								<span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">${res[i].precioActual}</span>
								<div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">Envío gratuito</div>
									<span itemprop="availability" content="https://schema.org/InStock"></span>
								<span itemprop="priceCurrency" content="USD"></span>
								<!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
								<!-- Vat Excluded message -->
								</div>
							<!-- inserting code for another button -->
													<!-- code ends  -->
													<div class="u-flL">
														<a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white;" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
														¡Cómpralo ahora!<span class="clipped"> - </span>
														</a>
													<div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
													<div id="streamline-bin-layer-content">
															<div id="sbin-image-content">
																	<img id="sbin-image" src="" alt="Nuevo-Samsung-Galaxy-Tab-e-Lite-7-034-Quad-Core-8GB-Rom-Wifi-Bt-Tablet-Android-Blanco">
															</div>
															<div id="sbin-text-content">
																	<p class="sbin-title">NEW Samsung Galaxy Tab E Lite 7" Quad Core 8GB ROM WiFi BT Android White Tablet</p>
															</div>
													</div>
							
													<div style="clear:both"></div>
							
													<div id="sbin-buttons">
															<button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
															<button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
													</div>
											</div>
							
									</div>
								</div>
												</div>	
											
											<div class="u-cb spcr vi-bbox-spcr10"></div>
									<div class="u-cb  ">
											<div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
											<div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
											<span>
														<a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
														Agregar al carro de compras<span class="clipped"> - </span>
														</a>
													</span>
													</div>
										<div class="u-cb spcr"></div>
										</div>
							
								<div class="watchListCmp ">
							<div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
							<div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
									<div class=" u-flL ">
												<div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
									<a i="-99" n="Watch list" href="">
										<span class="vi-atw-icn"></span>
										<span class="vi-atw-txt">Agregar a Lista de favoritos</span>
										<span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
									</a>
								</div>
								
								<div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
									<span class="vi-atw-full-lnk">
										<span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
									</span>
								</div>
								
								</div>
							
							
											<div class="vi-bbox-dspn u-cb spcr"></div>
											</div><div id="why2buy"><div class="w2b w2bsls">
									<div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">Entrega gratis en 4 días</span></div>
											<div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: #dd1e31" class="w2b-sgl">30 días para devoluciones</span></div>
											<div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: #dd1e31" class="w2b-sgl">Ahorro de 55%</span></div>
											</div>
							</div></div>
									<div id="vi-lkhdr-v4-plchdr"></div>
										<div id="vi-spw-atf">
														</div>
												<div id="shippingSummary"><div class="u-cb spcr"></div>
												<div class="u-cb spcr"></div>
								<div>
								<div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
								<div class="u-flL sh-col">
								<span id="shSummary">
									<span id="fshippingCost" class="notranslate sh-fr-cst ">
																		<span>GRATIS</span>
																</span>                            
											<span id="fShippingSvc">
											Standard Shipping<!-- GSP -->
													</span>
									<span aria-hidden="true"> | </span>
									<span>
										<a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
									</span>	
							
											<div id="sh-not-mayBe" style="display:none"></div>
							</span>
								<!-- Build Estimated delivery and CBT message -->
								</div>
								<div class="clear"></div>
							</div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
												<div class="u-flL iti-w75 ">
													<div class="iti-eu-txt iti-spacing">
							<div class="iti-eu-label vi-u-flL" id="" style="">
								Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
										<span itemprop="availableAtOrFrom">Fort Worth, Texas, Estados Unidos</span>
									</div>
									<div class="clear"></div>
							</div>
							</div>
												<div class="u-cb"></div>
											</div><div class="u-cb"></div>
									<div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
												<div class="u-flL iti-w75">
													<div id="shipsToSummary">
								<div class="iti-eu-txt iti-spacing">
									<div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
									<div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
										<span itemprop="areaServed">
										todo el mundo<span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
																								 <span class="hideForAcc">&nbsp;|&nbsp;</span>
															<a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
														</span>			
													</span>
									</div>
								</div>
								</div>
							</div>
											</div><div id="hideDelSec" style="">
									<div id="deliverySummary"><div class="u-cb spcr"></div>
												<div id="impchSummary" style="display: none;">
								<div class="u-flL lable">Costos de importación:</div>
								<div class="u-flL sh-col">
									<div>
										<span id="impch_show" style="display: none;">
											<span id="impchCost" class="sh-impchCost"></span>		
											 (cantidad confirmada al completar la transacción) </span>					
										<span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
										<span class="sh-bubble">
											<a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
										</span>
										<div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
												 <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
												 <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
												</div>
										</div>
								</div>
									<div>No se cobran cargos de importación adicionales</div>
									</div>
								<div class="u-cb spcr"></div>
							</div><div class="u-flL lable">Entrega:</div>
								<div class="u-flL sh-col">
								<span id="delSummary">
										<!-- First shipping service's cost -->
									<!-- PC 5555 cases -->
											<!-- sea changes -->
							<div class="sh-grn-top"></div>
							<div style="float:left">
									Entrega prevista el o antes del <strong class="vi-acc-del-range"><b>vie. 15 mar. </b></strong><span class="sh-bubble" style="padding-left: 5px;">
										<a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
									</span>
								</div>	
								<div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
											Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
								</div>
								<div class="sh-grn-btm"></div>
								</span>
								</div>
								</div></div>
									<div class="u-cb spcr"></div>
										<div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
								Pagos:</div><div class="u-flL rpColWid">
								<div id="payDet1" class="">
										<div>
								<img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
										<img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
										<img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
										<img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
										<img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
										</div>
							</div>
									<div class="pd-showGspLegal">
										<span id="contentGspLegal">Los costos de envío internacional y de importación se pagan en parte a Pitney Bowes Inc. <a class="vi-ds3-ter-a" style="white-space:nowrap;" href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#paymentsplit " target="_blank" aria-label="Obtén más información sobre el Programa de envíos globales de eBay">Más información<b class="hideforacc">(se abre en una nueva ventana o pestaña)</b></a></span>
										<div class="u-dspn">
											<span id="alternateGspLegalText1">Costos de envío internacional y de importación pagados a Pitney Bowes Inc. <a class="vi-ds3-ter-a" style="white-space:nowrap;" href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#paymentsplit " target="_blank" aria-label="Obtén más información sobre el Programa de envíos globales de eBay">Más información<b class="hideforacc">(se abre en una nueva ventana o pestaña)</b></a></span>
											<span id="alternateGspLegalText2">Los costos de envío internacional y de importación se pagan en parte a Pitney Bowes Inc. <a class="vi-ds3-ter-a" style="white-space:nowrap;" href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#paymentsplit " target="_blank" aria-label="Obtén más información sobre el Programa de envíos globales de eBay">Más información<b class="hideforacc">(se abre en una nueva ventana o pestaña)</b></a></span>
											<span id="alternateGspLegalText3">El costo de envío internacional se pagó a Pitney Bowes Inc. <a class="vi-ds3-ter-a" style="white-space:nowrap;" href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#paymentsplit " target="_blank" aria-label="Obtén más información sobre el Programa de envíos globales de eBay">Más información<b class="hideforacc">(se abre en una nueva ventana o pestaña)</b></a></span>
											<span id="alternateGspLegalText4">Cualquier costo de envío internacional se paga a Pitney Bowes Inc. <a class="vi-ds3-ter-a" style="white-space:nowrap;" href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#paymentsplit " target="_blank" aria-label="Obtén más información sobre el Programa de envíos globales de eBay">Más información<b class="hideforacc">(se abre en una nueva ventana o pestaña)</b></a></span>
										</div>
									</div>
								</div><div class="u-cb spcr"></div>
										<div id="ret-accept">
										<div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
										<div class="u-flL rpColWid">
												<table width="100%">
													<tbody><tr>
														<td class="rpWrapCol">
															<span style="">
																<span id="vi-ret-accrd-txt">30 días para devoluciones gratuitas</span>
																
																	 |&nbsp;
																<a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
																</span>
															</td>
													</tr>
											</tbody></table>
										</div>
									
									</div>
							
							<div class="u-cb spcr"></div>
										<div>
									</div>
							</form>
							
								</div>
							
							
                            <!-- The attribute(value) of UseScriptTag is null. --></div>`);
            
                            $('#vi_zoom_trigger_mask2').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[1].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[1].nombre}" mskuskip="false">`);
                            $('#SummaryPanel2').append(`	<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
                            <div class="vi-swc-lsp">
                                    <div style="" class="">
                            <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[1].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                                                <a class="it-sttl" data-mtdes="Microsoft Surface Go LTE&quot; (Intel Pentium 4415y/8gb/128gb ssd/win10/lte) nuevo embalaje original" data-mtsrclang="es-CO" href="#" onclick="return false;">
                                                mostrar título original</a>
                                                </span>
                                                </h1>
                            <!-- DO NOT change linkToTagId="rwid" as the catalog response has this ID set  -->
                            <div class="vi-hdops-two-clmn-fix">			
                                <div style="" class="vi-notify-new-bg-wrapper">
                                        <div class="vi-notify-new-bg-dTop" style=""> </div>
                                        <div id="vi_notification_new" class="vi-notify-new-bg-dBtm" style="top: -28px;"> 
                                            <img src="https://ir.ebaystatic.com/rs/v/tnj4p1myre1mpff12w4j1llndmc.png" width="11" height="12" class="vi-notify-new-img" alt="Artículo popular">
                                            <span style="font-weight:bold;">26 articulos vistos por dia</span>
                                        </div>
                                    </div>
                                </div>		
                            </div>
                        <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                                        </div>
                                <span id="vi-lkhdr-itmTitl" class="u-dspn">Microsoft Surface Go LTE (Intel Pentium 4415y/8gb/128gb ssd/win10/lte) nuevo embalaje original</span>
                    </div>
                            <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                    
                        <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
                        <form action="" method="post" name="viactiondetails">
                            <div class="c-std vi-ds3cont-box-marpad ">
                         <div class="nonActPanel ">
                         <div>
                     <div class="u-flL lable">
                         Estado:</div>
                     <div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[1].estado}</div>
                         </div>
                 
                 <!-- offscreen timer widget -->
                             <!-- some comment -->
                             <!-- volume pricing -->
                                     <div class="u-cb spcr"></div>
                                    
                                 <div class="u-cb spcr "></div>
                 <div class="">
                     <div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
                     <div>		
                         <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
                             <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
                                 <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
                             </div>
                             
                             <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
                             
                             <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
                                         <span id="qtySubTxt">
                                                 <span class="">
                                                 7 disponible(s)</span>
                                             </span>
                                         <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
                                 <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
                             <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">2 vendidos</a></span>
                         </span>
                                 
                             
                             <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
                             <!-- generating Id's array -->
                             <div class="u-dspn"> 
                                 <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
                                 <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
                                 <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
                                 <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
                                 <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
                                 <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
                                 <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
                             </div>
                         </div>
                     </div>
                     <div class="u-cb spcr"></div>
                     </div>
                 </div>
                         <div class="actPanel ">	
                         <div id="vi-orgPrc-container" style=" display:block; ">
                         <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
                         <div class="u-cb  vi-VR-prcTmt-hide">
                             <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
                     Precio:</div><span id="orgPrc" class="notranslate ms-orp">
                                        ${res[1].precio}</span>
                                     <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                                         <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                                             <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                                             <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                                         </div>
                                     </div>
                     </div>
                     </div>
                     <div id="vi-youSaveSTP-container" style=" display:block; ">
                         <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
                         </div>
                     <div class="u-cb spcr  vi-bbox-spcr15 "></div>
                     <div class="u-cb">
                        <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl"></div>
                            <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">
                
        <span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">      </span>
        <div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">      </div>
            <span itemprop="availability" content="https://schema.org/InStock"></span>
        <span itemprop="priceCurrency" content="USD"></span>
        <!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
        <!-- Vat Excluded message -->
        </div>
                                         <div class="u-flL">
                                             <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white; margin-left: 199px" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
                                             ¡Cómpralo ahora!<span class="clipped"> - </span>
                                             </a>
                                         <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                                         <div id="streamline-bin-layer-content">
                                                 <div id="sbin-image-content">
                                                         <img id="sbin-image" src="" alt="Nuevo-Samsung-Galaxy-Tab-e-Lite-7-034-Quad-Core-8GB-Rom-Wifi-Bt-Tablet-Android-Blanco">
                                                 </div>
                                                 <div id="sbin-text-content">
                                                         <p class="sbin-title">Microsoft Surface Go LTE (Intel Pentium 4415y/8gb/128gb ssd/win10/lte) nuevo embalaje original</p>
                                                 </div>
                                         </div>
                 
                                         <div style="clear:both"></div>
                 
                                         <div id="sbin-buttons">
                                                 <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                                                 <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                                         </div>
                                 </div>
                 
                         </div>
                     </div>
                                     </div>	
                                 
                                 <div class="u-cb spcr vi-bbox-spcr10"></div>
                         <div class="u-cb  ">
                                 <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
                                 <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
                                 <span>
                                             <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                                             Agregar al carro de compras<span class="clipped"> - </span>
                                             </a>
                                         </span>
                                         </div>
                             <div class="u-cb spcr"></div>
                             </div>
                 
                     <div class="watchListCmp ">
                 <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
                 <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
                         <div class=" u-flL ">
                                     <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
                         <a i="-99" n="Watch list" href="">
                             <span class="vi-atw-icn"></span>
                             <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
                             <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
                         </a>
                     </div>
                     
                     <div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
                         <span class="vi-atw-full-lnk">
                             <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
                         </span>
                     </div>
                     
                     </div>
                 
                 
                                 <div class="vi-bbox-dspn u-cb spcr"></div>
                                 </div><div id="why2buy"><div class="w2b w2bsls">
                         <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">12 lo marcaron como favorito</span></div>
                                 <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Usuario Antiguo</span></div>
                                 </div>
                 </div></div>
                         <div id="vi-lkhdr-v4-plchdr"></div>
                             <div id="vi-spw-atf">
                                             </div>
                                     <div id="shippingSummary"><div class="u-cb spcr"></div>
                                     <div class="u-cb spcr"></div>
                     <div>
                     <div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
                     <div class="u-flL sh-col">
                     <span id="shSummary">
                         <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                                             <span>Gratis</span>
                                                     </span> 
                                                     <span id="fShippingSvc">
                                                        No se envia a Honduras
                                                                </span>
                         <span aria-hidden="true"> | </span>
                         <span>
                             <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
                         </span>	
                 
                                 <div id="sh-not-mayBe" style="display:none"></div>
                 </span>
                     <!-- Build Estimated delivery and CBT message -->
                     </div>
                     <div class="clear"></div>
                 </div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                                     <div class="u-flL iti-w75 ">
                                         <div class="iti-eu-txt iti-spacing">
                 <div class="iti-eu-label vi-u-flL" id="" style="">
                     Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
                             <span itemprop="availableAtOrFrom">Berlin, Alemania</span>
                         </div>
                         <div class="clear"></div>
                 </div>
                 </div>
                                     <div class="u-cb"></div>
                                 </div><div class="u-cb"></div>
                         <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                                     <div class="u-flL iti-w75">
                                         <div id="shipsToSummary">
                     <div class="iti-eu-txt iti-spacing">
                         <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
                         <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
                             <span itemprop="areaServed">
                             UNION EUROPEA, Rusia<span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                                        <span class="hideForAcc">&nbsp;|&nbsp;</span>
                                                 <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                                             </span>			
                                         </span>
                         </div>
                     </div>
                     </div>
                 </div>
                                 </div><div id="hideDelSec" style="">
                         <div id="deliverySummary"><div class="u-cb spcr"></div>
                                     <div id="impchSummary" style="display: none;">
                     <div class="u-flL lable">Costos de importación:</div>
                     <div class="u-flL sh-col">
                         <div>
                             <span id="impch_show" style="display: none;">
                                 <span id="impchCost" class="sh-impchCost"></span>		
                                    (cantidad confirmada al completar la transacción) </span>					
                             <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
                             <span class="sh-bubble">
                                 <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
                             </span>
                             <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                                        <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                                        <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                                     </div>
                             </div>
                     </div>
                         <div>No se cobran cargos de importación adicionales</div>
                         </div>
                     <div class="u-cb spcr"></div>
                 </div><div class="u-flL lable">Entrega:</div>
                     <div class="u-flL sh-col">
                     <span id="delSummary">
                             <!-- First shipping service's cost -->
                         <!-- PC 5555 cases -->
                                 <!-- sea changes -->
                 <div class="sh-grn-top"></div>
                 <div style="float:left">
                         Varia <strong class="vi-acc-del-range"><b> </b></strong><span class="sh-bubble" style="padding-left: 5px;">
                             <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
                         </span>
                     </div>	
                     <div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                                 Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
                     </div>
                     <div class="sh-grn-btm"></div>
                     </span>
                     </div>
                     </div></div>
                         <div class="u-cb spcr"></div>
                             <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
                     Pagos:</div><div class="u-flL rpColWid">
                     <div id="payDet1" class="">
                             <div>
                     <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
                             </div>
                 </div>
                         <div class="pd-showGspLegal">
                             <div class="u-dspn">
                                 </div>
                         </div>
                     </div><div class="u-cb spcr"></div>
                             <div id="ret-accept">
                             <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
                             <div class="u-flL rpColWid">
                                     <table width="100%">
                                         <tbody><tr>
                                             <td class="rpWrapCol">
                                                 <span style="">
                                                     <span id="vi-ret-accrd-txt">No se acepta devoluciones</span>
                                                     
                                                            |&nbsp;
                                                     <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                                                     </span>
                                                 </td>
                                         </tr>
                                 </tbody></table>
                             </div>
                         
                         </div>
                 
                 <div class="u-cb spcr"></div>
                             <div>
                         </div>
                 </form>
                        </div>
                    
                    
                    <!-- The attribute(value) of UseScriptTag is null. --></div>`);

                            $('#vi_zoom_trigger_mask3').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[2].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[2].nombre}" mskuskip="false">`);
                            $('#SummaryPanel3').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
                            <div class="vi-swc-lsp">
                                    <div style="" class="">
                            <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[2].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                                                <a class="it-sttl" data-mtdes="Rosewill THOR V2-W Blanco&quot; Edition para juegos ATX caja de la computadora Torre Completa Blanco LED" data-mtsrclang="es-CO" href="#" onclick="return false;">
                                                mostrar título original</a>
                                                </span>
                                                </h1>
                            <!-- DO NOT change linkToTagId="rwid" as the catalog response has this ID set  -->
                            <div class="vi-hdops-two-clmn-fix">			
                                <div style="" class="vi-notify-new-bg-wrapper">
                                        <div class="vi-notify-new-bg-dTop" style=""> </div>
                                        <div id="vi_notification_new" class="vi-notify-new-bg-dBtm" style="top: -28px;">
                                        </div>
                                    </div>
                                </div>		
                            </div>
                        <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                                        </div>
                                <span id="vi-lkhdr-itmTitl" class="u-dspn">Rosewill THOR V2-W Blanco Edition para juegos ATX caja de la computadora Torre Completa Blanco LED</span>
                    </div>
                            <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                    
                        <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
                        <form action="" method="post" name="viactiondetails">
                            <div class="c-std vi-ds3cont-box-marpad ">
                         <div class="nonActPanel ">
                         <div>
                     <div class="u-flL lable">
                         Estado:</div>
                     <div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[2].estado}</div>
                         </div>
                 
                 <!-- offscreen timer widget -->
                             <!-- some comment -->
                             <!-- volume pricing -->
                                     <div class="u-cb spcr"></div>
                                                     <div>
                     <!-- Label Section -->
                     <div style="" class="u-flL lable">
                                 Precio por volumen:</div>
                     <!-- Label Section ends -->
                     <div class="vi-tiers u-flL">
                         <div class="vi-tier-cls">
                                     <span class="vi-volume">1-1</span>
                                         <span class="vi-spacr"></span>
                                     <span class="vi-vprice">USD109.99</span>
                                     <span class="vi-smallSpacr"></span>
                                     <span class="vi-offset">(CADA UNO)</span>							
                                         </div>
                             <div class="vi-tier-cls">
                                     <span class="vi-volume">2+</span>
                                         <span class="vi-spacr"></span>
                                     <span class="vi-vprice">USD98.99</span>
                                     <span class="vi-smallSpacr"></span>
                                     <span class="vi-offset">(10% de descuento cada uno)</span>	
                                         </div>
                             </div>
                 </div><!-- volume pricing ends -->
                                 <div class="u-cb spcr "></div>
                 <div class="">
                     <div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
                     <div>		
                         <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
                             <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
                                 <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
                             </div>
                             
                             <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
                             
                             <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
                                         <span id="qtySubTxt">
                                                 <span class="">
                                                 Existencias limitadas</span>
                                             </span>
                                         <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
                                 <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
                             <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">91 vendidos</a></span>
                         </span>
                                 
                             
                             <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
                             <!-- generating Id's array -->
                             <div class="u-dspn"> 
                                 <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
                                 <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
                                 <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
                                 <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
                                 <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
                                 <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
                                 <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
                             </div>
                         </div>
                     </div>
                     <div class="u-cb spcr"></div>
                     </div>
                 </div>
                         <div class="actPanel ">	
                         <div id="vi-orgPrc-container" style=" display:block; ">
                         <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
                         <div class="u-cb  vi-VR-prcTmt-hide">
                             <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
                     Precio:</div><span id="orgPrc" class="notranslate ms-orp">
                                        ${res[2].precio}</span>
                                     <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                                         <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                                             <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                                             <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                                         </div>
                                     </div>
                     </div>
                     </div>
                     <div id="vi-youSaveSTP-container" style=" display:block; ">
                         <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
                         <div class="u-cb ms-as-rw vi-VR-prcTmt-hide">
                             <div class="u-flL lable" id="youSaveSTP-lbl" style="">
                     Ahorras:</div><span id="youSaveSTP" class="notranslate ms-as">
                                     USD60.00 (35%&nbsp;de descuento)</span>
                 </div>
                         </div>
                     <div class="u-cb spcr  vi-bbox-spcr15 "></div>
                 
                                 <div class="u-cb">
                                     <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl">Ahora:</div>
                                         <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">
                             
                     <span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">${res[2].precioActual}</span>
                     <div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">Envío gratuito</div>
                         <span itemprop="availability" content="https://schema.org/InStock"></span>
                     <span itemprop="priceCurrency" content="USD"></span>
                     <!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
                     <!-- Vat Excluded message -->
                     </div>
                 <!-- inserting code for another button -->
                                         <!-- code ends  -->
                                         <div class="u-flL">
                                             <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white;" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
                                             ¡Cómpralo ahora!<span class="clipped"> - </span>
                                             </a>
                                         <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                                         <div id="streamline-bin-layer-content">
                                                 <div id="sbin-image-content">
                                                         <img id="sbin-image" src="" alt="Nuevo-Samsung-Galaxy-Tab-e-Lite-7-034-Quad-Core-8GB-Rom-Wifi-Bt-Tablet-Android-Blanco">
                                                 </div>
                                                 <div id="sbin-text-content">
                                                         <p class="sbin-title">Rosewill THOR V2-W Blanco Edition para juegos ATX caja de la computadora Torre Completa Blanco LED</p>
                                                 </div>
                                         </div>
                 
                                         <div style="clear:both"></div>
                 
                                         <div id="sbin-buttons">
                                                 <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                                                 <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                                         </div>
                                 </div>
                 
                         </div>
                     </div>
                                     </div>	
                                 
                                 <div class="u-cb spcr vi-bbox-spcr10"></div>
                         <div class="u-cb  ">
                                 <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
                                 <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
                                 <span>
                                             <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                                             Agregar al carro de compras<span class="clipped"> - </span>
                                             </a>
                                         </span>
                                         </div>
                             <div class="u-cb spcr"></div>
                             </div>
                 
                     <div class="watchListCmp ">
                 <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
                 <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
                         <div class=" u-flL ">
                                     <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
                         <a i="-99" n="Watch list" href="">
                             <span class="vi-atw-icn"></span>
                             <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
                             <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
                         </a>
                     </div>
                     
                     <div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
                         <span class="vi-atw-full-lnk">
                             <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
                         </span>
                     </div>
                     
                     </div>
                 
                 
                                 <div class="vi-bbox-dspn u-cb spcr"></div>
                                 </div><div id="why2buy"><div class="w2b w2bsls">
                         <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">100% de satisfaccion del comprador</span></div>
                                 <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: #dd1e31" class="w2b-sgl">91 vendido(s)</span></div>
                                 <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: #dd1e31" class="w2b-sgl">Mas de 49% vendidos</span></div>
                                 </div>
                 </div></div>
                         <div id="vi-lkhdr-v4-plchdr"></div>
                             <div id="vi-spw-atf">
                                             </div>
                                     <div id="shippingSummary"><div class="u-cb spcr"></div>
                                     <div class="u-cb spcr"></div>
                     <div>
                     <div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
                     <div class="u-flL sh-col">
                     <span id="shSummary">
                         <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                                             <span>GRATIS</span>
                                                     </span>                            
                                 <span id="fShippingSvc">
                                 Envio Estandar
                                         </span>
                         <span aria-hidden="true"> | </span>
                         <span>
                             <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
                         </span>	
                 
                                 <div id="sh-not-mayBe" style="display:none"></div>
                 </span>
                     <!-- Build Estimated delivery and CBT message -->
                     </div>
                     <div class="clear"></div>
                 </div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                                     <div class="u-flL iti-w75 ">
                                         <div class="iti-eu-txt iti-spacing">
                 <div class="iti-eu-label vi-u-flL" id="" style="">
                     Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
                             <span itemprop="availableAtOrFrom">Rowland Heights, California, Estados Unidos</span>
                         </div>
                         <div class="clear"></div>
                 </div>
                 </div>
                                     <div class="u-cb"></div>
                                 </div><div class="u-cb"></div>
                         <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                                     <div class="u-flL iti-w75">
                                         <div id="shipsToSummary">
                     <div class="iti-eu-txt iti-spacing">
                         <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
                         <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
                             <span itemprop="areaServed">
                                Estados Unidos y muchos otros países <span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                                        <span class="hideForAcc">&nbsp;|&nbsp;</span>
                                                 <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                                             </span>			
                                         </span>
                         </div>
                     </div>
                     </div>
                 </div>
                                 </div><div id="hideDelSec" style="">
                         <div id="deliverySummary"><div class="u-cb spcr"></div>
                                     <div id="impchSummary" style="display: none;">
                     <div class="u-flL lable">Costos de importación:</div>
                     <div class="u-flL sh-col">
                         <div>
                             <span id="impch_show" style="display: none;">
                                 <span id="impchCost" class="sh-impchCost"></span>		
                                    (cantidad confirmada al completar la transacción) </span>					
                             <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
                             <span class="sh-bubble">
                                 <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
                             </span>
                             <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                                        <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                                        <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                                     </div>
                             </div>
                     </div>
                         <div>No se cobran cargos de importación adicionales</div>
                         </div>
                     <div class="u-cb spcr"></div>
                 </div><div class="u-flL lable">Entrega:</div>
                     <div class="u-flL sh-col">
                     <span id="delSummary">
                             <!-- First shipping service's cost -->
                         <!-- PC 5555 cases -->
                                 <!-- sea changes -->
                 <div class="sh-grn-top"></div>
                 <div style="float:left">
                         Entrega prevista el o antes del <strong class="vi-acc-del-range"><b>vie. 26 abr. </b></strong><span class="sh-bubble" style="padding-left: 5px;">
                             <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
                         </span>
                     </div>	
                     <div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                                 Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
                     </div>
                     <div class="sh-grn-btm"></div>
                     </span>
                     </div>
                     </div></div>
                         <div class="u-cb spcr"></div>
                             <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
                     Pagos:</div><div class="u-flL rpColWid">
                     <div id="payDet1" class="">
                             <div>
                     <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
                             </div>
                 </div>
                         <div class="pd-showGspLegal">
                         </div>
                     </div><div class="u-cb spcr"></div>
                             <div id="ret-accept">
                             <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
                             <div class="u-flL rpColWid">
                                     <table width="100%">
                                         <tbody><tr>
                                             <td class="rpWrapCol">
                                                 <span style="">
                                                     <span id="vi-ret-accrd-txt">60 días para devoluciones gratuitas</span>
                                                     
                                                            |&nbsp;
                                                     <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                                                     </span>
                                                 </td>
                                         </tr>
                                 </tbody></table>
                             </div>
                         
                         </div>
                 
                 <div class="u-cb spcr"></div>
                             <div>
                         </div>
                 </form>
                 
                        </div>
                    </div>`);

                            $('#vi_zoom_trigger_mask4').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[3].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[3].nombre}" mskuskip="false">`);
                            $('#SummaryPanel4').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
                            <div class="vi-swc-lsp">
                                    <div style="" class="">
                            <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[3].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                                                <a class="it-sttl" data-mtdes="Rosewill RGB Gaming Keyboard&quot; , Con Cable, membrana mecánica, Blanco, Neón K51W" data-mtsrclang="es-CO" href="#" onclick="return false;">
                                                mostrar título original</a>
                                                </span>
                                                </h1><!--[if IE 7]>
                                <div id="vi-itt-filler"></div>
                                <![endif]-->
                                <h2 id="subTitle" class="it-sttl">
                                    <span data-mtdes="Ships fast! See our feedback!" data-mtsrclang="es-CO">Envío rápido! vea nuestra regeneración!</span>
                                                    </h2>		
                            </div>
                        <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                                        </div>
                                <span id="vi-lkhdr-itmTitl" class="u-dspn">Rosewill RGB Gaming Keyboard, Con Cable, membrana mecánica, Blanco, Neón K51W</span>
                    </div>
                            <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                    
                        <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
                        <form action="" method="post" name="viactiondetails">
                             <div class="c-std vi-ds3cont-box-marpad ">
                            <div class="nonActPanel ">
                            <div>
                        <div class="u-flL lable">
                            Estado:</div>
                        <div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[3].estado}</div>
                            </div>
                    
                    <!-- offscreen timer widget -->
                                <!-- some comment -->
                                <!-- volume pricing -->
                                        <div class="u-cb spcr"></div>
                                                        <div>
                        <!-- Label Section -->
                        <div style="" class="u-flL lable">
                                    Precio por volumen:</div>
                        <!-- Label Section ends -->
                        <div class="vi-tiers u-flL">
                            <div class="vi-tier-cls">
                                        <span class="vi-volume">1-1</span>
                                            <span class="vi-spacr"></span>
                                        <span class="vi-vprice">USD34.99</span>
                                        <span class="vi-smallSpacr"></span>
                                        <span class="vi-offset">(CADA UNO)</span>							
                                            </div>
                                <div class="vi-tier-cls">
                                        <span class="vi-volume">2+</span>
                                            <span class="vi-spacr"></span>
                                        <span class="vi-vprice">USD31.49</span>
                                        <span class="vi-smallSpacr"></span>
                                        <span class="vi-offset">(10% de descuento cada uno)</span>	
                                            </div>
                                </div>
                    </div><!-- volume pricing ends -->
                                    <div class="u-cb spcr "></div>
                    <div class="">
                        <div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
                        <div>		
                            <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
                                <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
                                    <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
                                </div>
                                
                                <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
                                
                                <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
                                            <span id="qtySubTxt">
                                                    <span class="">
                                                    Mas de 10 disponibles</span>
                                                </span>
                                            <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
                                    <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
                                <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">590 vendidos</a></span>
                            </span>
                                    
                                
                                <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
                                <!-- generating Id's array -->
                                <div class="u-dspn"> 
                                    <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
                                    <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
                                    <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
                                    <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
                                    <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
                                    <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
                                    <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
                                </div>
                            </div>
                        </div>
                        <div class="u-cb spcr"></div>
                        </div>
                    </div>
                            <div class="actPanel ">	
                            <div id="vi-orgPrc-container" style=" display:block; ">
                            <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
                            <div class="u-cb  vi-VR-prcTmt-hide">
                                <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
                        Precio de venta:</div><span id="orgPrc" class="notranslate ms-orp">
                                            ${res[3].precio}</span>
                                        <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                                            <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                                                <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                                                <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                                            </div>
                                        </div>
                        </div>
                        </div>
                        <div id="vi-youSaveSTP-container" style=" display:block; ">
                            <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
                            <div class="u-cb ms-as-rw vi-VR-prcTmt-hide">
                                <div class="u-flL lable" id="youSaveSTP-lbl" style="">
                        Ahorras:</div><span id="youSaveSTP" class="notranslate ms-as">
                                        USD25.00 (41%&nbsp;de descuento)</span>
                    </div>
                            </div>
                        <div class="u-cb spcr  vi-bbox-spcr15 "></div>
                    
                                    <div class="u-cb">
                                        <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl">Ahora:</div>
                                            <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">
                                
                        <span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">${res[3].precioActual}</span>
                        <div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">Envío gratuito</div>
                            <span itemprop="availability" content="https://schema.org/InStock"></span>
                        <span itemprop="priceCurrency" content="USD"></span>
                        <!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
                        <!-- Vat Excluded message -->
                        </div>
                    <!-- inserting code for another button -->
                                            <!-- code ends  -->
                                            <div class="u-flL">
                                                <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white;" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
                                                ¡Cómpralo ahora!<span class="clipped"> - </span>
                                                </a>
                                            <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                                            <div id="streamline-bin-layer-content">
                                                    <div id="sbin-image-content">
                                                            <img id="sbin-image" src="" alt="Rosewill RGB Gaming Keyboard, Con Cable, membrana mecánica, Blanco, Neón K51W">
                                                    </div>
                                                    <div id="sbin-text-content">
                                                            <p class="sbin-title">Rosewill RGB Gaming Keyboard, Con Cable, membrana mecánica, Blanco, Neón K51W</p>
                                                    </div>
                                            </div>
                    
                                            <div style="clear:both"></div>
                    
                                            <div id="sbin-buttons">
                                                    <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                                                    <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                                            </div>
                                    </div>
                    
                            </div>
                        </div>
                                        </div>	
                                    
                                    <div class="u-cb spcr vi-bbox-spcr10"></div>
                            <div class="u-cb  ">
                                    <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
                                    <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
                                    <span>
                                                <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                                                Agregar al carro de compras<span class="clipped"> - </span>
                                                </a>
                                            </span>
                                            </div>
                                <div class="u-cb spcr"></div>
                                </div>
                    
                        <div class="watchListCmp ">
                    <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
                    <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
                            <div class=" u-flL ">
                                        <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
                            <a i="-99" n="Watch list" href="">
                                <span class="vi-atw-icn"></span>
                                <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
                                <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
                            </a>
                        </div>
                        
                        <div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
                            <span class="vi-atw-full-lnk">
                                <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
                            </span>
                        </div>
                        
                        </div>
                    
                    
                                    <div class="vi-bbox-dspn u-cb spcr"></div>
                                    </div><div id="why2buy"><div class="w2b w2bsls">
                            <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">100% de satisfaccion del comprador</span></div>
                                    <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: #dd1e31" class="w2b-sgl">Envios y devoluciones gratis</span></div>
                                    <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: #dd1e31" class="w2b-sgl">590 vendido(s)</span></div>
                                    </div>
                    </div></div>
                            <div id="vi-lkhdr-v4-plchdr"></div>
                                <div id="vi-spw-atf">
                                                </div>
                                        <div id="shippingSummary"><div class="u-cb spcr"></div>
                                        <div class="u-cb spcr"></div>
                        <div>
                        <div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
                        <div class="u-flL sh-col">
                        <span id="shSummary">
                            <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                                                <span>GRATIS</span>
                                                        </span>                            
                                    <span id="fShippingSvc">
                                    Envio estandar<!-- GSP -->
                                            </span>
                            <span aria-hidden="true"> | </span>
                            <span>
                                <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
                            </span>	
                    
                                    <div id="sh-not-mayBe" style="display:none"></div>
                    </span>
                        <!-- Build Estimated delivery and CBT message -->
                        </div>
                        <div class="clear"></div>
                    </div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                                        <div class="u-flL iti-w75 ">
                                            <div class="iti-eu-txt iti-spacing">
                    <div class="iti-eu-label vi-u-flL" id="" style="">
                        Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
                                <span itemprop="availableAtOrFrom">Rowland Heights, California, Estados Unidos</span>
                            </div>
                            <div class="clear"></div>
                    </div>
                    </div>
                                        <div class="u-cb"></div>
                                    </div><div class="u-cb"></div>
                            <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                                        <div class="u-flL iti-w75">
                                            <div id="shipsToSummary">
                        <div class="iti-eu-txt iti-spacing">
                            <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
                            <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
                                <span itemprop="areaServed">
                                Estados Unidos y muchos otros países <span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                                         <span class="hideForAcc">&nbsp;|&nbsp;</span>
                                                    <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                                                </span>			
                                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                                    </div><div id="hideDelSec" style="">
                            <div id="deliverySummary"><div class="u-cb spcr"></div>
                                        <div id="impchSummary" style="display: none;">
                        <div class="u-flL lable">Costos de importación:</div>
                        <div class="u-flL sh-col">
                            <div>
                                <span id="impch_show" style="display: none;">
                                    <span id="impchCost" class="sh-impchCost"></span>		
                                     (cantidad confirmada al completar la transacción) </span>					
                                <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
                                <span class="sh-bubble">
                                    <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
                                </span>
                                <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                                         <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                                         <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                                        </div>
                                </div>
                        </div>
                            <div>No se cobran cargos de importación adicionales</div>
                            </div>
                        <div class="u-cb spcr"></div>
                    </div><div class="u-flL lable">Entrega:</div>
                        <div class="u-flL sh-col">
                        <span id="delSummary">
                                <!-- First shipping service's cost -->
                            <!-- PC 5555 cases -->
                                    <!-- sea changes -->
                    <div class="sh-grn-top"></div>
                    <div style="float:left">
                            Entrega prevista el o antes del <strong class="vi-acc-del-range"><b>vie. 26 abr. </b></strong><span class="sh-bubble" style="padding-left: 5px;">
                                <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
                            </span>
                        </div>	
                        <div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                                    Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
                        </div>
                        <div class="sh-grn-btm"></div>
                        </span>
                        </div>
                        </div></div>
                            <div class="u-cb spcr"></div>
                                <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
                        Pagos:</div><div class="u-flL rpColWid">
                        <div id="payDet1" class="">
                                <div>
                        <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
                                <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
                                <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
                                <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
                                <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
                                </div>
                    </div>
                            <div class="pd-showGspLegal">
                            </div>
                        </div><div class="u-cb spcr"></div>
                                <div id="ret-accept">
                                <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
                                <div class="u-flL rpColWid">
                                        <table width="100%">
                                            <tbody><tr>
                                                <td class="rpWrapCol">
                                                    <span style="">
                                                        <span id="vi-ret-accrd-txt">60 días para devoluciones gratuitas</span>
                                                        
                                                             |&nbsp;
                                                        <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                                                        </span>
                                                    </td>
                                            </tr>
                                    </tbody></table>
                                </div>
                            
                            </div>
                    
                    <div class="u-cb spcr"></div>
                                <div>
                            </div>
                    </form>
                    
                        </div>
                    
                    
                    <!-- The attribute(value) of UseScriptTag is null. --></div>`);

                            $('#vi_zoom_trigger_mask5').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[4].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[4].nombre}" mskuskip="false">`);
                            $('#SummaryPanel5').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
                            <div class="vi-swc-lsp">
                                    <div style="" class="">
                            <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[4].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                                                <a class="it-sttl" data-mtdes="Rosewill RGB Gaming Keyboard&quot; , Con Cable, membrana mecánica, Blanco, Neón K51W" data-mtsrclang="es-CO" href="#" onclick="return false;">
                                                mostrar título original</a>
                                                </span>
                                                </h1><!--[if IE 7]>
                                <div id="vi-itt-filler"></div>
                                <![endif]-->
                                <h2 id="subTitle" class="it-sttl">
                                    <span data-mtdes="Ships fast! See our feedback!" data-mtsrclang="es-CO">Envío rápido! vea nuestra regeneración!</span>
                                                    </h2>	
                                                    <div class="vi-hdops-two-clmn-fix">			
                                <div style="" class="vi-notify-new-bg-wrapper">
                                        <div class="vi-notify-new-bg-dTop" style=""> </div>
                                        <div id="vi_notification_new" class="vi-notify-new-bg-dBtm" style="top: -28px;"> 
                                            <img src="https://ir.ebaystatic.com/rs/v/tnj4p1myre1mpff12w4j1llndmc.png" width="11" height="12" class="vi-notify-new-img" alt="Artículo popular">
                                            <span style="font-weight:bold;">3 articulos vistos por ahora</span>
                                        </div>
                                    </div>
                                </div>	
                            </div>
                        <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                                        </div>
                                <span id="vi-lkhdr-itmTitl" class="u-dspn">Casio Para Hombre Edifice Acero Inoxidable Multifunción Reloj Cronógrafo Ef527d-1av</span>
                    </div>
                            <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                    
                        <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
                        <form action="" method="post" name="viactiondetails">
                            <div class="c-std vi-ds3cont-box-marpad ">
                         <div class="nonActPanel ">
                         <div>
                     <div class="u-flL lable">
                         Estado:</div>
                     <div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[4].estado}</div>
                         </div>
                 
                 <!-- offscreen timer widget -->
                             <!-- some comment -->
                             <!-- volume pricing -->
                                     <div class="u-cb spcr"></div>
                                                     <div>
                     <div class="vi-tiers u-flL">
                             </div>
                 </div><!-- volume pricing ends -->
                                 <div class="u-cb spcr "></div>
                 <div class="">
                     <div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
                     <div>		
                         <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
                             <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
                                 <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
                             </div>
                             
                             <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
                             
                             <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
                                         <span id="qtySubTxt">
                                                 <span class="">
                                                 Mas de 10 disponibles</span>
                                             </span>
                                         <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
                                 <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
                             <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">76 vendidos</a></span>
                         </span>
                                 
                             
                             <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
                             <!-- generating Id's array -->
                             <div class="u-dspn"> 
                                 <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
                                 <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
                                 <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
                                 <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
                                 <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
                                 <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
                                 <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
                             </div>
                         </div>
                     </div>
                     <div class="u-cb spcr"></div>
                     </div>
                 </div>
                         <div class="actPanel ">	
                         <div id="vi-orgPrc-container" style=" display:block; ">
                         <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
                         <div class="u-cb  vi-VR-prcTmt-hide">
                             <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
                     Precio de venta:</div><span id="orgPrc" class="notranslate ms-orp">
                     ${res[4].precio}</span>
                                     <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                                         <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                                             <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                                             <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                                         </div>
                                     </div>
                     </div>
                     </div>
                     <div id="vi-youSaveSTP-container" style=" display:block; ">
                         <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
                         <div class="u-cb ms-as-rw vi-VR-prcTmt-hide">
                             <div class="u-flL lable" id="youSaveSTP-lbl" style="">
                     Ahorras:</div><span id="youSaveSTP" class="notranslate ms-as">
                                     USD65.01 (37%&nbsp;de descuento)</span>
                 </div>
                         </div>
                     <div class="u-cb spcr  vi-bbox-spcr15 "></div>
                 
                                 <div class="u-cb">
                                     <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl">Ahora:</div>
                                         <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">
                             
                     <span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">${res[4].precioActual}</span>
                     <div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">Envío gratuito</div>
                         <span itemprop="availability" content="https://schema.org/InStock"></span>
                     <span itemprop="priceCurrency" content="USD"></span>
                     <!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
                     <!-- Vat Excluded message -->
                     </div>
                 <!-- inserting code for another button -->
                                         <!-- code ends  -->
                                         <div class="u-flL">
                                             <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white;" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
                                             ¡Cómpralo ahora!<span class="clipped"> - </span>
                                             </a>
                                         <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                                         <div id="streamline-bin-layer-content">
                                                 <div id="sbin-image-content">
                                                         <img id="sbin-image" src="" alt="Nuevo-Samsung-Galaxy-Tab-e-Lite-7-034-Quad-Core-8GB-Rom-Wifi-Bt-Tablet-Android-Blanco">
                                                 </div>
                                                 <div id="sbin-text-content">
                                                         <p class="sbin-title">Casio Para Hombre Edifice Acero Inoxidable Multifunción Reloj Cronógrafo Ef527d-1av</p>
                                                 </div>
                                         </div>
                 
                                         <div style="clear:both"></div>
                 
                                         <div id="sbin-buttons">
                                                 <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                                                 <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                                         </div>
                                 </div>
                 
                         </div>
                     </div>
                                     </div>	
                                 
                                 <div class="u-cb spcr vi-bbox-spcr10"></div>
                         <div class="u-cb  ">
                                 <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
                                 <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
                                 <span>
                                             <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                                             Agregar al carro de compras<span class="clipped"> - </span>
                                             </a>
                                         </span>
                                         </div>
                             <div class="u-cb spcr"></div>
                             </div>
                 
                     <div class="watchListCmp ">
                 <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
                 <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
                         <div class=" u-flL ">
                                     <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
                         <a i="-99" n="Watch list" href="">
                             <span class="vi-atw-icn"></span>
                             <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
                             <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
                         </a>
                     </div>
                     
                     <div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
                         <span class="vi-atw-full-lnk">
                             <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
                         </span>
                     </div>
                     
                     </div>
                 
                 
                                 <div class="vi-bbox-dspn u-cb spcr"></div>
                                 </div><div id="why2buy"><div class="w2b w2bsls">
                         <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">100% de satisfaccion del comprador</span></div>
                                 <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: #dd1e31" class="w2b-sgl">766 vendido(s)</span></div>
                                 <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: #dd1e31" class="w2b-sgl">Mas del 98% vendidos</span></div>
                                 </div>
                 </div></div>
                         <div id="vi-lkhdr-v4-plchdr"></div>
                             <div id="vi-spw-atf">
                                             </div>
                                     <div id="shippingSummary"><div class="u-cb spcr"></div>
                                     <div class="u-cb spcr"></div>
                     <div>
                     <div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
                     <div class="u-flL sh-col">
                     <span id="shSummary">
                         <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                                             <span>GRATIS</span>
                                                     </span>                            
                                 <span id="fShippingSvc">
                                 Envio Estandar
                                         </span>
                         <span aria-hidden="true"> | </span>
                         <span>
                             <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
                         </span>	
                 
                                 <div id="sh-not-mayBe" style="display:none"></div>
                 </span>
                     <!-- Build Estimated delivery and CBT message -->
                     </div>
                     <div class="clear"></div>
                 </div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                                     <div class="u-flL iti-w75 ">
                                         <div class="iti-eu-txt iti-spacing">
                 <div class="iti-eu-label vi-u-flL" id="" style="">
                     Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
                             <span itemprop="availableAtOrFrom">Brooklyn, New York, Estados Unidos</span>
                         </div>
                         <div class="clear"></div>
                 </div>
                 </div>
                                     <div class="u-cb"></div>
                                 </div><div class="u-cb"></div>
                         <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                                     <div class="u-flL iti-w75">
                                         <div id="shipsToSummary">
                     <div class="iti-eu-txt iti-spacing">
                         <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
                         <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
                             <span itemprop="areaServed">
                                América, Asia, Australia  <span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                                        <span class="hideForAcc">&nbsp;|&nbsp;</span>
                                                 <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                                             </span>			
                                         </span>
                         </div>
                     </div>
                     </div>
                 </div>
                                 </div><div id="hideDelSec" style="">
                         <div id="deliverySummary"><div class="u-cb spcr"></div>
                                     <div id="impchSummary" style="display: none;">
                     <div class="u-flL lable">Costos de importación:</div>
                     <div class="u-flL sh-col">
                         <div>
                             <span id="impch_show" style="display: none;">
                                 <span id="impchCost" class="sh-impchCost"></span>		
                                    (cantidad confirmada al completar la transacción) </span>					
                             <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
                             <span class="sh-bubble">
                                 <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
                             </span>
                             <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                                        <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                                        <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                                     </div>
                             </div>
                     </div>
                         <div>No se cobran cargos de importación adicionales</div>
                         </div>
                     <div class="u-cb spcr"></div>
                 </div><div class="u-flL lable">Entrega:</div>
                     <div class="u-flL sh-col">
                     <span id="delSummary">
                             <!-- First shipping service's cost -->
                         <!-- PC 5555 cases -->
                                 <!-- sea changes -->
                 <div class="sh-grn-top"></div>
                 <div style="float:left">
                         Entrega prevista el o antes del <strong class="vi-acc-del-range"><b>vie. 15 mar. </b></strong><span class="sh-bubble" style="padding-left: 5px;">
                             <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
                         </span>
                     </div>	
                     <div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                                 Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
                     </div>
                     <div class="sh-grn-btm"></div>
                     </span>
                     </div>
                     </div></div>
                         <div class="u-cb spcr"></div>
                             <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
                     Pagos:</div><div class="u-flL rpColWid">
                     <div id="payDet1" class="">
                             <div>
                     <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
                             </div>
                 </div>
                         <div class="pd-showGspLegal">
                         </div>
                     </div><div class="u-cb spcr"></div>
                             <div id="ret-accept">
                             <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
                             <div class="u-flL rpColWid">
                                     <table width="100%">
                                         <tbody><tr>
                                             <td class="rpWrapCol">
                                                 <span style="">
                                                     <span id="vi-ret-accrd-txt">30 días para devoluciones gratuitas</span>
                                                     
                                                            |&nbsp;
                                                     <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                                                     </span>
                                                 </td>
                                         </tr>
                                 </tbody></table>
                             </div>
                         
                         </div>
                 
                 <div class="u-cb spcr"></div>
                             <div>
                         </div>
                 </form>
                 
                        </div>
                    
                    
                    <!-- The attribute(value) of UseScriptTag is null. --></div>`);

                            $('#vi_zoom_trigger_mask6').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[5].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[5].nombre}" mskuskip="false">`);
                            $('#SummaryPanel6').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
									<div class="vi-swc-lsp">
											<div style="" class="">
									<h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[5].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
														<a class="it-sttl" data-mtdes="Silpada 'Mazel Tov'&quot; , Multi-Stone Star of David Pendant in Silver, 18" data-mtsrclang="es-CO" href="#" onclick="return false;">
														mostrar título original</a>
														</span>
														</h1><!--[if IE 7]>
										<div id="vi-itt-filler"></div>
										<![endif]-->
										<h2 id="subTitle" class="it-sttl">
											<span data-mtdes="Ships fast! See our feedback!" data-mtsrclang="es-CO">The official seller of Silpada jewelry!</span>
															</h2>	
															<div class="vi-hdops-two-clmn-fix">			
								<div class="it-rlBr it-rlBrd  it-rlBr500 ">
												</div>
										<span id="vi-lkhdr-itmTitl" class="u-dspn">Silpada 'Mazel Tov' Multi-Stone Star of David Pendant in Silver, 18</span>
							</div>
									<div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
							
								<h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
								<form action="" method="post" name="viactiondetails">
									<div class="c-std vi-ds3cont-box-marpad ">
								 <div class="nonActPanel ">
								 <div>
							 <div class="u-flL lable">
								 Estado:</div>
							 <div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[5].estado}</div>
								 </div>
						 
						 <!-- offscreen timer widget -->
									 <!-- some comment -->
									 <!-- volume pricing -->
											 <div class="u-cb spcr"></div>
															 <div>
							 <div class="vi-tiers u-flL">
									
									 </div>
						 </div><!-- volume pricing ends -->
										 <div class="u-cb spcr "></div>
						 <div class="">
							 <div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
							 <div>		
								 <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
									 <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
										 <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
									 </div>
									 
									 <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
									 
									 <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
												 <span id="qtySubTxt">
														 <span class="">
														 Mas de 10 disponibles</span>
													 </span>
												 <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
										 <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
									 <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">127 vendidos</a></span>
								 </span>
										 
									 
									 <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
									 <!-- generating Id's array -->
									 <div class="u-dspn"> 
										 <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
										 <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
										 <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
										 <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
										 <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
										 <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
										 <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
									 </div>
								 </div>
							 </div>
							 <div class="u-cb spcr"></div>
							 </div>
						 </div>
								 <div class="actPanel ">	
								 <div id="vi-orgPrc-container" style=" display:block; ">
								 <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
								 <div class="u-cb  vi-VR-prcTmt-hide">
									 <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
							 Precio de venta:</div><span id="orgPrc" class="notranslate ms-orp">
                             ${res[5].precio}</span>
											 <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
												 <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
													 <div class="ms-olp-ttl">¿Qué significa este precio?</div>
													 <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
												 </div>
											 </div>
							 </div>
							 </div>
							 <div id="vi-youSaveSTP-container" style=" display:block; ">
								 <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
								 <div class="u-cb ms-as-rw vi-VR-prcTmt-hide">
									 <div class="u-flL lable" id="youSaveSTP-lbl" style="">
							 Ahorras:</div><span id="youSaveSTP" class="notranslate ms-as">
											 USD30.00 (43%&nbsp;de descuento)</span>
						 </div>
								 </div>
							 <div class="u-cb spcr  vi-bbox-spcr15 "></div>
						 
										 <div class="u-cb">
											 <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl">Ahora:</div>
												 <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">
									 
							 <span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">${res[5].precioActual}</span>
							 <div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">Envío gratuito</div>
								 <span itemprop="availability" content="https://schema.org/InStock"></span>
							 <span itemprop="priceCurrency" content="USD"></span>
							 <!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
							 <!-- Vat Excluded message -->
							 </div>
						 <!-- inserting code for another button -->
												 <!-- code ends  -->
												 <div class="u-flL">
													 <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white;" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
													 ¡Cómpralo ahora!<span class="clipped"> - </span>
													 </a>
												 <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
												 <div id="streamline-bin-layer-content">
														 <div id="sbin-image-content">
																 <img id="sbin-image" src="" alt="Silpada 'Mazel Tov' Multi-Stone Star of David Pendant in Silver, 18">
														 </div>
														 <div id="sbin-text-content">
																 <p class="sbin-title">Silpada 'Mazel Tov' Multi-Stone Star of David Pendant in Silver, 18</p>
														 </div>
												 </div>
						 
												 <div style="clear:both"></div>
						 
												 <div id="sbin-buttons">
														 <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
														 <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
												 </div>
										 </div>
						 
								 </div>
							 </div>
											 </div>	
										 
										 <div class="u-cb spcr vi-bbox-spcr10"></div>
								 <div class="u-cb  ">
										 <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
										 <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
										 <span>
													 <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
													 Agregar al carro de compras<span class="clipped"> - </span>
													 </a>
												 </span>
												 </div>
									 <div class="u-cb spcr"></div>
									 </div>
						 
							 <div class="watchListCmp ">
						 <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
						 <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
								 <div class=" u-flL ">
											 <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
								 <a i="-99" n="Watch list" href="">
									 <span class="vi-atw-icn"></span>
									 <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
									 <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
								 </a>
							 </div>
							 
							 <div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
								 <span class="vi-atw-full-lnk">
									 <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
								 </span>
							 </div>
							 
							 </div>
						 
						 
										 <div class="vi-bbox-dspn u-cb spcr"></div>
										 </div><div id="why2buy"><div class="w2b w2bsls">
								 <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">100% de satisfaccion del comprador</span></div>
										 <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">127 vendido(s)</span></div>
										 <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Envio y devoluciones gratis</span></div>
										 </div>
						 </div></div>
								 <div id="vi-lkhdr-v4-plchdr"></div>
									 <div id="vi-spw-atf">
													 </div>
											 <div id="shippingSummary"><div class="u-cb spcr"></div>
											 <div class="u-cb spcr"></div>
							 <div>
							 <div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
							 <div class="u-flL sh-col">
							 <span id="shSummary">
								 <span id="fshippingCost" class="notranslate sh-fr-cst ">
																	 <span>GRATIS</span>
															 </span>                            
										 <span id="fShippingSvc">
										 Standard Shipping<!-- GSP -->
												 </span>
								 <span aria-hidden="true"> | </span>
								 <span>
									 <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
								 </span>	
						 
										 <div id="sh-not-mayBe" style="display:none"></div>
						 </span>
							 <!-- Build Estimated delivery and CBT message -->
							 </div>
							 <div class="clear"></div>
						 </div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
											 <div class="u-flL iti-w75 ">
												 <div class="iti-eu-txt iti-spacing">
						 <div class="iti-eu-label vi-u-flL" id="" style="">
							 Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
									 <span itemprop="availableAtOrFrom"> Fort Lauderdale, Florida, Estados Unidos
									</span>
								 </div>
								 <div class="clear"></div>
						 </div>
						 </div>
											 <div class="u-cb"></div>
										 </div><div class="u-cb"></div>
								 <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
											 <div class="u-flL iti-w75">
												 <div id="shipsToSummary">
							 <div class="iti-eu-txt iti-spacing">
								 <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
								 <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
									 <span itemprop="areaServed">
									 Estados Unidos<span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
																								<span class="hideForAcc">&nbsp;|&nbsp;</span>
														 <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
													 </span>			
												 </span>
								 </div>
							 </div>
							 </div>
						 </div>
										 </div><div id="hideDelSec" style="">
								 <div id="deliverySummary"><div class="u-cb spcr"></div>
											 <div id="impchSummary" style="display: none;">
							 <div class="u-flL lable">Costos de importación:</div>
							 <div class="u-flL sh-col">
								 <div>
									 <span id="impch_show" style="display: none;">
										 <span id="impchCost" class="sh-impchCost"></span>		
											(cantidad confirmada al completar la transacción) </span>					
									 <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
									 <span class="sh-bubble">
										 <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
									 </span>
									 <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
												<span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
												<span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
											 </div>
									 </div>
							 </div>
								 <div>No se cobran cargos de importación adicionales</div>
								 </div>
							 <div class="u-cb spcr"></div>
						 </div><div class="u-flL lable">Entrega:</div>
							 <div class="u-flL sh-col">
							 <span id="delSummary">
									 <!-- First shipping service's cost -->
								 <!-- PC 5555 cases -->
										 <!-- sea changes -->
						 <div class="sh-grn-top"></div>
						 <div style="float:left">
								 Entrega prevista el o antes del <strong class="vi-acc-del-range"><b>jue. 25 abr. </b></strong><span class="sh-bubble" style="padding-left: 5px;">
									 <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
								 </span>
							 </div>	
							 <div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
										 Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
							 </div>
							 <div class="sh-grn-btm"></div>
							 </span>
							 </div>
							 </div></div>
								 <div class="u-cb spcr"></div>
									 <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
							 Pagos:</div><div class="u-flL rpColWid">
							 <div id="payDet1" class="">
									 <div>
							 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
									 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
									 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
									 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
									 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
									 </div>
						 </div>
								 <div class="pd-showGspLegal">
								 </div>
							 </div><div class="u-cb spcr"></div>
									 <div id="ret-accept">
									 <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
									 <div class="u-flL rpColWid">
											 <table width="100%">
												 <tbody><tr>
													 <td class="rpWrapCol">
														 <span style="">
															 <span id="vi-ret-accrd-txt">60 días para devoluciones gratuitas</span>
															 
																	|&nbsp;
															 <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
															 </span>
														 </td>
												 </tr>
										 </tbody></table>
									 </div>
								 
								 </div>
						 
						 <div class="u-cb spcr"></div>
									 <div>
								 </div>
						 </form>
						 
								</div>
							
							
							<!-- The attribute(value) of UseScriptTag is null. --></div>
							</div>
                            </div>`);
                            
                            $('#vi_zoom_trigger_mask7').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[6].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[6].nombre}" mskuskip="false">`);
                            $('#SummaryPanel7').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
                            <div class="vi-swc-lsp">
                                    <div style="" class="">
                            <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[6].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                                                <a class="it-sttl" data-mtdes="HUGO XX by HUGO BOSS 3.3&quot; / 3.4 oz / 100 ml EDT Perfume Spray Women NEW IN BOX" data-mtsrclang="es-CO" href="#" onclick="return false;">
                                                mostrar título original</a>
                                                </span>
                                                </h1>
                            <!-- DO NOT change linkToTagId="rwid" as the catalog response has this ID set  -->
                            <div class="vi-hdops-two-clmn-fix">			
                                <div style="" class="vi-notify-new-bg-wrapper">
                                        <div class="vi-notify-new-bg-dTop" style=""> </div>
                                        
                                    </div>
                                </div>		
                            </div>
                        <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                                        </div>
                                <span id="vi-lkhdr-itmTitl" class="u-dspn">HUGO XX by HUGO BOSS 3.3 / 3.4 oz / 100 ml EDT Perfume Spray Women NEW IN BOX</span>
                    </div>
                            <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                    
                        <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
                        <form action="" method="post" name="viactiondetails">
                            <div class="c-std vi-ds3cont-box-marpad ">
                         <div class="nonActPanel ">
                         <div>
                     <div class="u-flL lable">
                         Estado:</div>
                     <div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[6].estado}</div>
                         </div>
                 
                 <!-- offscreen timer widget -->
                             <!-- some comment -->
                             <!-- volume pricing -->
                                     <div class="u-cb spcr"></div>
                                    
                                 <div class="u-cb spcr "></div>
                 <div class="">
                     <div>		
                         <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
                             <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
                             <!-- generating Id's array -->
                             <div class="u-dspn"> 
                                 <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
                                 <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
                                 <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
                                 <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
                                 <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
                                 <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
                                 <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
                             </div>
                         </div>
                     </div>
                     <div class="u-cb spcr"></div>
                     </div>
                 </div>
                         <div class="actPanel ">	
                         <div id="vi-orgPrc-container" style=" display:block; ">
                         <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
                         <div class="u-cb  vi-VR-prcTmt-hide">
                             <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
                     Precio:</div><span id="orgPrc" class="notranslate ms-orp">
                     ${res[6].precio}</span>
                                     <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                                         <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                                             <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                                             <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                                         </div>
                                     </div>
                     </div>
                     </div>
                     <div id="vi-youSaveSTP-container" style=" display:block; ">
                         <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
                         </div>
                     <div class="u-cb spcr  vi-bbox-spcr15 "></div>
                     <div class="u-cb">
                        <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl"></div>
                            <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">
                
        <span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">      </span>
        <div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">      </div>
            <span itemprop="availability" content="https://schema.org/InStock"></span>
        <span itemprop="priceCurrency" content="USD"></span>
        <!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
        <!-- Vat Excluded message -->
        </div>
                                         <div class="u-flL">
                                             <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white; margin-left: 199px" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
                                             ¡Cómpralo ahora!<span class="clipped"> - </span>
                                             </a>
                                         <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                                         <div id="streamline-bin-layer-content">
                                                 <div id="sbin-image-content">
                                                         <img id="sbin-image" src="" alt="Nuevo-Samsung-Galaxy-Tab-e-Lite-7-034-Quad-Core-8GB-Rom-Wifi-Bt-Tablet-Android-Blanco">
                                                 </div>
                                                 <div id="sbin-text-content">
                                                         <p class="sbin-title">HUGO XX by HUGO BOSS 3.3 / 3.4 oz / 100 ml EDT Perfume Spray Women NEW IN BOX</p>
                                                 </div>
                                         </div>
                 
                                         <div style="clear:both"></div>
                 
                                         <div id="sbin-buttons">
                                                 <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                                                 <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                                         </div>
                                 </div>
                 
                         </div>
                     </div>
                                     </div>	
                                 
                                 <div class="u-cb spcr vi-bbox-spcr10"></div>
                         <div class="u-cb  ">
                                 <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
                                 <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
                                 <span>
                                             <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                                             Agregar al carro de compras<span class="clipped"> - </span>
                                             </a>
                                         </span>
                                         </div>
                             <div class="u-cb spcr"></div>
                             </div>
                 
                     <div class="watchListCmp ">
                 <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
                 <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
                         <div class=" u-flL ">
                                     <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
                         <a i="-99" n="Watch list" href="">
                             <span class="vi-atw-icn"></span>
                             <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
                             <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
                         </a>
                     </div>
                     
                     <div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
                         <span class="vi-atw-full-lnk">
                             <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
                         </span>
                     </div>
                     
                     </div>
                 
                 
                                 <div class="vi-bbox-dspn u-cb spcr"></div>
                                 </div><div id="why2buy"><div class="w2b w2bsls">
                         <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">30 dias para devoluciones</span></div>
                                 <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Usuario Antiguo</span></div>
                                 </div>
                 </div></div>
                         <div id="vi-lkhdr-v4-plchdr"></div>
                             <div id="vi-spw-atf">
                                             </div>
                                     <div id="shippingSummary"><div class="u-cb spcr"></div>
                                     <div class="u-cb spcr"></div>
                     <div>
                     <div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
                     <div class="u-flL sh-col">
                     <span id="shSummary">
                         <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                                             <span>Gratis</span>
                                                     </span> 
                                                     <span id="fShippingSvc">
                                                        UPS Expedited United States 
                                                                </span>
                         <span aria-hidden="true"> | </span>
                         <span>
                             <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
                         </span>	
                 
                                 <div id="sh-not-mayBe" style="display:none"></div>
                 </span>
                     <!-- Build Estimated delivery and CBT message -->
                     </div>
                     <div class="clear"></div>
                 </div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                                     <div class="u-flL iti-w75 ">
                                         <div class="iti-eu-txt iti-spacing">
                 <div class="iti-eu-label vi-u-flL" id="" style="">
                     Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
                             <span itemprop="availableAtOrFrom"> Montreal, QC, Canadá
                            </span>
                         </div>
                         <div class="clear"></div>
                 </div>
                 </div>
                                     <div class="u-cb"></div>
                                 </div><div class="u-cb"></div>
                         <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                                     <div class="u-flL iti-w75">
                                         <div id="shipsToSummary">
                     <div class="iti-eu-txt iti-spacing">
                         <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
                         <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
                             <span itemprop="areaServed">
                                Canadá, Estados Unidos <span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                                        <span class="hideForAcc">&nbsp;|&nbsp;</span>
                                                 <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                                             </span>			
                                         </span>
                         </div>
                     </div>
                     </div>
                 </div>
                                 </div><div id="hideDelSec" style="">
                         <div id="deliverySummary"><div class="u-cb spcr"></div>
                                     <div id="impchSummary" style="display: none;">
                     <div class="u-flL lable">Costos de importación:</div>
                     <div class="u-flL sh-col">
                         <div>
                             <span id="impch_show" style="display: none;">
                                 <span id="impchCost" class="sh-impchCost"></span>		
                                    (cantidad confirmada al completar la transacción) </span>					
                             <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
                             <span class="sh-bubble">
                                 <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
                             </span>
                             <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                                        <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                                        <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                                     </div>
                             </div>
                     </div>
                         <div>No se cobran cargos de importación adicionales</div>
                         </div>
                     <div class="u-cb spcr"></div>
                 </div><div class="u-flL lable">Entrega:</div>
                     <div class="u-flL sh-col">
                     <span id="delSummary">
                             <!-- First shipping service's cost -->
                         <!-- PC 5555 cases -->
                                 <!-- sea changes -->
                 <div class="sh-grn-top"></div>
                 <div style="float:left">
                    Previsto entre el  <strong class="vi-acc-del-range"><b>mar. 30 abr. y el mar. 7 may.
                    </b></strong><span class="sh-bubble" style="padding-left: 5px;">
                             <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
                         </span>
                     </div>	
                     <div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                                 Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
                     </div>
                     <div class="sh-grn-btm"></div>
                     </span>
                     </div>
                     </div></div>
                         <div class="u-cb spcr"></div>
                             <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
                     Pagos:</div><div class="u-flL rpColWid">
                     <div id="payDet1" class="">
                             <div>
                     <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
                             </div>
                 </div>
                         <div class="pd-showGspLegal">
                             <div class="u-dspn">
                                 </div>
                         </div>
                     </div><div class="u-cb spcr"></div>
                             <div id="ret-accept">
                             <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
                             <div class="u-flL rpColWid">
                                     <table width="100%">
                                         <tbody><tr>
                                             <td class="rpWrapCol">
                                                 <span style="">
                                                     <span id="vi-ret-accrd-txt">30 dias, el comprador paga por la devolucion del articulo</span>
                                                     
                                                            |&nbsp;
                                                     <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                                                     </span>
                                                 </td>
                                         </tr>
                                 </tbody></table>
                             </div>
                         
                         </div>
                 
                 <div class="u-cb spcr"></div>
                             <div>
                         </div>
                 </form>
                        </div>
                    
                    
                    <!-- The attribute(value) of UseScriptTag is null. --></div>`);

                            $('#vi_zoom_trigger_mask8').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[7].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[7].nombre}" mskuskip="false">`);
                            $('#SummaryPanel8').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
									<div class="vi-swc-lsp">
											<div style="" class="">
									<h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[7].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
														<a class="it-sttl" data-mtdes="Mens 3 en 1 afeitadora eléctrica de 3D&quot; Recargable Lavable Maquinilla de Afeitar Barba Recortadora" data-mtsrclang="es-CO" href="#" onclick="return false;">
														mostrar título original</a>
														</span>
														</h1>
									<!-- DO NOT change linkToTagId="rwid" as the catalog response has this ID set  -->
									<div class="vi-hdops-two-clmn-fix">			
										<div style="" class="vi-notify-new-bg-wrapper">
												<div class="vi-notify-new-bg-dTop" style=""> </div>
												<div id="vi_notification_new" class="vi-notify-new-bg-dBtm" style="top: -28px;">
												</div>
											</div>
										</div>		
									</div>
								<div class="it-rlBr it-rlBrd  it-rlBr500 ">
												</div>
										<span id="vi-lkhdr-itmTitl" class="u-dspn">Mens 3 en 1 afeitadora eléctrica de 3D Recargable Lavable Maquinilla de Afeitar Barba Recortadora</span>
							</div>
									<div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
							
								<h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
								<form action="" method="post" name="viactiondetails">
									<div class="c-std vi-ds3cont-box-marpad ">
								 <div class="nonActPanel ">
								 <div>
							 <div class="u-flL lable">
								 Estado:</div>
							 <div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[7].estado}</div>
								 </div>
						 
						 <!-- offscreen timer widget -->
									 <!-- some comment -->
									 <!-- volume pricing -->
											 <div class="u-cb spcr"></div>
											
										 <div class="u-cb spcr "></div>
						 <div class="">
							 <div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
							 <div>		
								 <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
									 <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
										 <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
									 </div>
									 
									 <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
									 
									 <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
												 <span id="qtySubTxt">
														 <span class="">
														 7 disponible(s)</span>
													 </span>
												 <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
										 <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
									 <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">2 vendidos</a></span>
								 </span>
										 
									 
									 <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
									 <!-- generating Id's array -->
									 <div class="u-dspn"> 
										 <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
										 <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
										 <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
										 <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
										 <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
										 <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
										 <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
									 </div>
								 </div>
							 </div>
							 <div class="u-cb spcr"></div>
							 </div>
						 </div>
								 <div class="actPanel ">	
								 <div id="vi-orgPrc-container" style=" display:block; ">
								 <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
								 <div class="u-cb  vi-VR-prcTmt-hide">
									 <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
							 Precio:</div><span id="orgPrc" class="notranslate ms-orp">
                             ${res[7].precio}</span>
											 <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
												 <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
													 <div class="ms-olp-ttl">¿Qué significa este precio?</div>
													 <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
												 </div>
											 </div>
							 </div>
							 </div>
							 <div id="vi-youSaveSTP-container" style=" display:block; ">
								 <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
								 </div>
							 <div class="u-cb spcr  vi-bbox-spcr15 "></div>
							 <div class="u-cb">
								<div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl"></div>
									<div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">
						
				<span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">      </span>
				<div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">      </div>
					<span itemprop="availability" content="https://schema.org/InStock"></span>
				<span itemprop="priceCurrency" content="USD"></span>
				<!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
				<!-- Vat Excluded message -->
				</div>
												 <div class="u-flL">
													 <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white; margin-left: 199px" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
													 ¡Cómpralo ahora!<span class="clipped"> - </span>
													 </a>
												 <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
												 <div id="streamline-bin-layer-content">
														 <div id="sbin-image-content">
																 <img id="sbin-image" src="" alt="Nuevo-Samsung-Galaxy-Tab-e-Lite-7-034-Quad-Core-8GB-Rom-Wifi-Bt-Tablet-Android-Blanco">
														 </div>
														 <div id="sbin-text-content">
																 <p class="sbin-title">Microsoft Surface Go LTE (Intel Pentium 4415y/8gb/128gb ssd/win10/lte) nuevo embalaje original</p>
														 </div>
												 </div>
						 
												 <div style="clear:both"></div>
						 
												 <div id="sbin-buttons">
														 <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
														 <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
												 </div>
										 </div>
						 
								 </div>
							 </div>
											 </div>	
										 
										 <div class="u-cb spcr vi-bbox-spcr10"></div>
								 <div class="u-cb  ">
										 <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
										 <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
										 <span>
													 <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
													 Agregar al carro de compras<span class="clipped"> - </span>
													 </a>
												 </span>
												 </div>
									 <div class="u-cb spcr"></div>
									 </div>
						 
							 <div class="watchListCmp ">
						 <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
						 <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
								 <div class=" u-flL ">
											 <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
								 <a i="-99" n="Watch list" href="">
									 <span class="vi-atw-icn"></span>
									 <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
									 <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
								 </a>
							 </div>
							 
							 <div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
								 <span class="vi-atw-full-lnk">
									 <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
								 </span>
							 </div>
							 
							 </div>
						 
						 
										 <div class="vi-bbox-dspn u-cb spcr"></div>
										 </div><div id="why2buy"><div class="w2b w2bsls">
								 <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">Cantidad restante limitada</span></div>
										 <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Mas de 64% vendidos</span></div>
										 <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Envio gratis</span></div>
										 </div>
						 </div></div>
								 <div id="vi-lkhdr-v4-plchdr"></div>
									 <div id="vi-spw-atf">
													 </div>
											 <div id="shippingSummary"><div class="u-cb spcr"></div>
											 <div class="u-cb spcr"></div>
							 <div>
							 <div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
							 <div class="u-flL sh-col">
							 <span id="shSummary">
								 <span id="fshippingCost" class="notranslate sh-fr-cst ">
																	 <span>Gratis</span>
															 </span> 
															 <span id="fShippingSvc">
																ePacket delivery from Hong Kong 
																		</span>
								 <span aria-hidden="true"> | </span>
								 <span>
									 <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
								 </span>	
						 
										 <div id="sh-not-mayBe" style="display:none"></div>
						 </span>
							 <!-- Build Estimated delivery and CBT message -->
							 </div>
							 <div class="clear"></div>
						 </div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
											 <div class="u-flL iti-w75 ">
												 <div class="iti-eu-txt iti-spacing">
						 <div class="iti-eu-label vi-u-flL" id="" style="">
							 Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
									 <span itemprop="availableAtOrFrom"> Hongkong, Hong Kong
									</span>
								 </div>
								 <div class="clear"></div>
						 </div>
						 </div>
											 <div class="u-cb"></div>
										 </div><div class="u-cb"></div>
								 <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
											 <div class="u-flL iti-w75">
												 <div id="shipsToSummary">
							 <div class="iti-eu-txt iti-spacing">
								 <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
								 <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
									 <span itemprop="areaServed">
									 todo el mundo<span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
																								<span class="hideForAcc">&nbsp;|&nbsp;</span>
														 <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
													 </span>			
												 </span>
								 </div>
							 </div>
							 </div>
						 </div>
										 </div><div id="hideDelSec" style="">
								 <div id="deliverySummary"><div class="u-cb spcr"></div>
											 <div id="impchSummary" style="display: none;">
							 <div class="u-flL lable">Costos de importación:</div>
							 <div class="u-flL sh-col">
								 <div>
									 <span id="impch_show" style="display: none;">
										 <span id="impchCost" class="sh-impchCost"></span>		
											(cantidad confirmada al completar la transacción) </span>					
									 <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
									 <span class="sh-bubble">
										 <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
									 </span>
									 <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
												<span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
												<span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
											 </div>
									 </div>
							 </div>
								 <div>No se cobran cargos de importación adicionales</div>
								 </div>
							 <div class="u-cb spcr"></div>
						 </div><div class="u-flL lable">Entrega:</div>
							 <div class="u-flL sh-col">
							 <span id="delSummary">
									 <!-- First shipping service's cost -->
								 <!-- PC 5555 cases -->
										 <!-- sea changes -->
						 <div class="sh-grn-top"></div>
						 <div style="float:left">
							Previsto entre el <strong class="vi-acc-del-range"><b>mié. 1 may. y el mar. 21 may.  
							</b></strong><span class="sh-bubble" style="padding-left: 5px;">
									 <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
								 </span>
							 </div>	
							 <div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
										 Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
							 </div>
							 <div class="sh-grn-btm"></div>
							 </span>
							 </div>
							 </div></div>
								 <div class="u-cb spcr"></div>
									 <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
							 Pagos:</div><div class="u-flL rpColWid">
							 <div id="payDet1" class="">
									 <div>
							 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
									 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
									 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
									 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
									 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
									 </div>
						 </div>
								 <div class="pd-showGspLegal">
									 <div class="u-dspn">
										 </div>
								 </div>
							 </div><div class="u-cb spcr"></div>
									 <div id="ret-accept">
									 <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
									 <div class="u-flL rpColWid">
											 <table width="100%">
												 <tbody><tr>
													 <td class="rpWrapCol">
														 <span style="">
															 <span id="vi-ret-accrd-txt">El vendedor no acepta devoluciones</span>
															 
																	|&nbsp;
															 <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
															 </span>
														 </td>
												 </tr>
										 </tbody></table>
									 </div>
								 
								 </div>
						 
						 <div class="u-cb spcr"></div>
									 <div>
								 </div>
						 </form>
								</div>
                            </div>`);
                            
                            $('#vi_zoom_trigger_mask9').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[8].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[8].nombre}" mskuskip="false">`);
                            $('#SummaryPanel9').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
                            <div class="vi-swc-lsp">
                                    <div style="" class="">
                            <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[8].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                                                <a class="it-sttl" data-mtdes="Motorcycle Cover Waterproof&quot; Outdoor Rain Dust UV Scooter Motorbike Protector 3XL" data-mtsrclang="es-CO" href="#" onclick="return false;">
                                                mostrar título original</a>
                                                </span>
                                                </h1>
                            <!-- DO NOT change linkToTagId="rwid" as the catalog response has this ID set  -->
                            <div class="vi-hdops-two-clmn-fix">			
                                <div style="" class="vi-notify-new-bg-wrapper">
                                        <div class="vi-notify-new-bg-dTop" style=""> </div>
                                        <div id="vi_notification_new" class="vi-notify-new-bg-dBtm" style="top: -28px;">
                                        </div>
                                    </div>
                                </div>		
                            </div>
                        <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                                        </div>
                                <span id="vi-lkhdr-itmTitl" class="u-dspn">Motorcycle Cover Waterproof Outdoor Rain Dust UV Scooter Motorbike Protector 3XL</span>
                    </div>
                            <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">
                    
                        <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
                        <form action="" method="post" name="viactiondetails">
                            <div class="c-std vi-ds3cont-box-marpad ">
                         <div class="nonActPanel ">
                         <div>
                     <div class="u-flL lable">
                         Estado:</div>
                     <div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[8].estado}</div>
                         </div>
                 
                 <!-- offscreen timer widget -->
                             <!-- some comment -->
                             <!-- volume pricing -->
                                     <div class="u-cb spcr"></div>
                                    
                                 <div class="u-cb spcr "></div>
                 <div class="">
                     <div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
                     <div>		
                         <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
                             <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
                                 <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
                             </div>
                             
                             <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
                             
                             <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
                                         <span id="qtySubTxt">
                                                 <span class="">
                                                 10 disponible(s)</span>
                                             </span>
                                         <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
                                 <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
                             <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">45 vendidos</a></span>
                         </span>
                                 
                             
                             <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
                             <!-- generating Id's array -->
                             <div class="u-dspn"> 
                                 <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
                                 <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
                                 <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
                                 <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
                                 <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
                                 <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
                                 <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
                             </div>
                         </div>
                     </div>
                     <div class="u-cb spcr"></div>
                     </div>
                 </div>
                         <div class="actPanel ">	
                         <div id="vi-orgPrc-container" style=" display:block; ">
                         <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
                         <div class="u-cb  vi-VR-prcTmt-hide">
                             <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
                     Precio:</div><span id="orgPrc" class="notranslate ms-orp">
                     ${res[8].precio}</span>
                                     <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                                         <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                                             <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                                             <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                                         </div>
                                     </div>
                     </div>
                     </div>
                     <div id="vi-youSaveSTP-container" style=" display:block; ">
                         <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
                         </div>
                     <div class="u-cb spcr  vi-bbox-spcr15 "></div>
                     <div class="u-cb">
                        <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl"></div>
                            <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">
                
        <span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">      </span>
        <div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">      </div>
            <span itemprop="availability" content="https://schema.org/InStock"></span>
        <span itemprop="priceCurrency" content="USD"></span>
        <!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
        <!-- Vat Excluded message -->
        </div>
                                         <div class="u-flL">
                                             <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white; margin-left: 199px" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
                                             ¡Cómpralo ahora!<span class="clipped"> - </span>
                                             </a>
                                         <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                                         <div id="streamline-bin-layer-content">
                                                 <div id="sbin-image-content">
                                                         <img id="sbin-image" src="" alt="Nuevo-Samsung-Galaxy-Tab-e-Lite-7-034-Quad-Core-8GB-Rom-Wifi-Bt-Tablet-Android-Blanco">
                                                 </div>
                                                 <div id="sbin-text-content">
                                                         <p class="sbin-title">Motorcycle Cover Waterproof Outdoor Rain Dust UV Scooter Motorbike Protector 3XL</p>
                                                 </div>
                                         </div>
                 
                                         <div style="clear:both"></div>
                 
                                         <div id="sbin-buttons">
                                                 <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                                                 <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                                         </div>
                                 </div>
                 
                         </div>
                     </div>
                                     </div>	
                                 
                                 <div class="u-cb spcr vi-bbox-spcr10"></div>
                         <div class="u-cb  ">
                                 <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
                                 <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
                                 <span>
                                             <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                                             Agregar al carro de compras<span class="clipped"> - </span>
                                             </a>
                                         </span>
                                         </div>
                             <div class="u-cb spcr"></div>
                             </div>
                 
                     <div class="watchListCmp ">
                 <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
                 <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
                         <div class=" u-flL ">
                                     <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
                         <a i="-99" n="Watch list" href="">
                             <span class="vi-atw-icn"></span>
                             <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
                             <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
                         </a>
                     </div>
                     
                     <div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
                         <span class="vi-atw-full-lnk">
                             <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
                         </span>
                     </div>
                     
                     </div>
                 
                 
                                 <div class="vi-bbox-dspn u-cb spcr"></div>
                                 </div><div id="why2buy"><div class="w2b w2bsls">
                         <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">100% de satisfaccion del comprador</span></div>
                                 <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">45 vendidos</span></div>
                                 <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Mas de 81% vendidos</span></div>
                                 </div>
                 </div></div>
                         <div id="vi-lkhdr-v4-plchdr"></div>
                             <div id="vi-spw-atf">
                                             </div>
                                     <div id="shippingSummary"><div class="u-cb spcr"></div>
                                     <div class="u-cb spcr"></div>
                     <div>
                     <div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
                     <div class="u-flL sh-col">
                     <span id="shSummary">
                         <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                                             <span>
                                                                USD1.99 (aprox. L 48.85) </span>
                                                     </span> 
                                                     <span id="fShippingSvc">
                                                        Standard SpeedPAK from China/Hong Kong/Taiwan  
                                                                </span>
                         <span aria-hidden="true"> | </span>
                         <span>
                             <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
                         </span>	
                 
                                 <div id="sh-not-mayBe" style="display:none"></div>
                 </span>
                     <!-- Build Estimated delivery and CBT message -->
                     </div>
                     <div class="clear"></div>
                 </div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                                     <div class="u-flL iti-w75 ">
                                         <div class="iti-eu-txt iti-spacing">
                 <div class="iti-eu-label vi-u-flL" id="" style="">
                     Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
                             <span itemprop="availableAtOrFrom">  ShenZhen, China

                            </span>
                         </div>
                         <div class="clear"></div>
                 </div>
                 </div>
                                     <div class="u-cb"></div>
                                 </div><div class="u-cb"></div>
                         <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                                     <div class="u-flL iti-w75">
                                         <div id="shipsToSummary">
                     <div class="iti-eu-txt iti-spacing">
                         <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
                         <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
                             <span itemprop="areaServed">
                             todo el mundo<span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                                        <span class="hideForAcc">&nbsp;|&nbsp;</span>
                                                 <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                                             </span>			
                                         </span>
                         </div>
                     </div>
                     </div>
                 </div>
                                 </div><div id="hideDelSec" style="">
                         <div id="deliverySummary"><div class="u-cb spcr"></div>
                                     <div id="impchSummary" style="display: none;">
                     <div class="u-flL lable">Costos de importación:</div>
                     <div class="u-flL sh-col">
                         <div>
                             <span id="impch_show" style="display: none;">
                                 <span id="impchCost" class="sh-impchCost"></span>		
                                    (cantidad confirmada al completar la transacción) </span>					
                             <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
                             <span class="sh-bubble">
                                 <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
                             </span>
                             <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                                        <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                                        <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                                     </div>
                             </div>
                     </div>
                         <div>No se cobran cargos de importación adicionales</div>
                         </div>
                     <div class="u-cb spcr"></div>
                 </div><div class="u-flL lable">Entrega:</div>
                     <div class="u-flL sh-col">
                     <span id="delSummary">
                             <!-- First shipping service's cost -->
                         <!-- PC 5555 cases -->
                                 <!-- sea changes -->
                 <div class="sh-grn-top"></div>
                 <div style="float:left">
                    Previsto entre el <strong class="vi-acc-del-range"><b>lun. 6 may. y el mié. 15 may.    
                    </b></strong><span class="sh-bubble" style="padding-left: 5px;">
                             <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
                         </span>
                     </div>	
                     <div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                                 Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
                     </div>
                     <div class="sh-grn-btm"></div>
                     </span>
                     </div>
                     </div></div>
                         <div class="u-cb spcr"></div>
                             <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
                     Pagos:</div><div class="u-flL rpColWid">
                     <div id="payDet1" class="">
                             <div>
                     <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
                             <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
                             </div>
                 </div>
                         <div class="pd-showGspLegal">
                             <div class="u-dspn">
                                 </div>
                         </div>
                     </div><div class="u-cb spcr"></div>
                             <div id="ret-accept">
                             <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
                             <div class="u-flL rpColWid">
                                     <table width="100%">
                                         <tbody><tr>
                                             <td class="rpWrapCol">
                                                 <span style="">
                                                     <span id="vi-ret-accrd-txt">El vendedor no acepta devoluciones</span>
                                                     
                                                            |&nbsp;
                                                     <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                                                     </span>
                                                 </td>
                                         </tr>
                                 </tbody></table>
                             </div>
                         
                         </div>
                 
                 <div class="u-cb spcr"></div>
                             <div>
                         </div>
                 </form>
                        </div>
                    </div>`);

        $('#vi_zoom_trigger_mask10').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[9].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[9].nombre}" mskuskip="false">`);
        $('#SummaryPanel10').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
        <div class="vi-swc-lsp">
                <div style="" class="">
        <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[9].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                            <a class="it-sttl" data-mtdes="3D huecos coche insignia Metal Llaveros&quot; Soporte Colgante Plata Llavero Para Nissan" data-mtsrclang="es-CO" href="#" onclick="return false;">
                            mostrar título original</a>
                            </span>
                            </h1>
        <!-- DO NOT change linkToTagId="rwid" as the catalog response has this ID set  -->
        <div class="vi-hdops-two-clmn-fix">			
            <div style="" class="vi-notify-new-bg-wrapper">
                    <div class="vi-notify-new-bg-dTop" style=""> </div>
                    <div id="vi_notification_new" class="vi-notify-new-bg-dBtm" style="top: -28px;">
                    </div>
                </div>
            </div>		
        </div>
    <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                    </div>
            <span id="vi-lkhdr-itmTitl" class="u-dspn">3D huecos coche insignia Metal Llaveros Soporte Colgante Plata Llavero Para Nissan</span>
</div>
        <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">

    <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
    <form action="" method="post" name="viactiondetails">
        <div class="c-std vi-ds3cont-box-marpad ">
     <div class="nonActPanel ">
     <div>
 <div class="u-flL lable">
     Estado:</div>
 <div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[9].estado}</div>
     </div>

<!-- offscreen timer widget -->
         <!-- some comment -->
         <!-- volume pricing -->
                 <div class="u-cb spcr"></div>
                
             <div class="u-cb spcr "></div>
<div class="">
 <div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
 <div>		
     <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
         <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
             <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
         </div>
         
         <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
         
         <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
                     <span id="qtySubTxt">
                             <span class="">
                             Mas de 10 disponible(s)</span>
                         </span>
                     <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
             <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
         <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">1.440 vendidos</a></span>
     </span>
             
         
         <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
         <!-- generating Id's array -->
         <div class="u-dspn"> 
             <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
             <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
             <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
             <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
             <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
             <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
             <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
         </div>
     </div>
 </div>
 <div class="u-cb spcr"></div>
 </div>
</div>
     <div class="actPanel ">	
     <div id="vi-orgPrc-container" style=" display:block; ">
     <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
     <div class="u-cb  vi-VR-prcTmt-hide">
         <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
 Precio:</div><span id="orgPrc" class="notranslate ms-orp">
 ${res[9].precio}</span>
                 <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                     <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                         <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                         <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                     </div>
                 </div>
 </div>
 </div>
 <div id="vi-youSaveSTP-container" style=" display:block; ">
     <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
     </div>
 <div class="u-cb spcr  vi-bbox-spcr15 "></div>
 <div class="u-cb">
    <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl"></div>
        <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">

<span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">      </span>
<div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">      </div>
<span itemprop="availability" content="https://schema.org/InStock"></span>
<span itemprop="priceCurrency" content="USD"></span>
<!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
<!-- Vat Excluded message -->
</div>
                     <div class="u-flL">
                         <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white; margin-left: 199px" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
                         ¡Cómpralo ahora!<span class="clipped"> - </span>
                         </a>
                     <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                     <div id="streamline-bin-layer-content">
                             <div id="sbin-image-content">
                                     <img id="sbin-image" src="" alt="Nuevo-Samsung-Galaxy-Tab-e-Lite-7-034-Quad-Core-8GB-Rom-Wifi-Bt-Tablet-Android-Blanco">
                             </div>
                             <div id="sbin-text-content">
                                     <p class="sbin-title">3D huecos coche insignia Metal Llaveros Soporte Colgante Plata Llavero Para Nissan</p>
                             </div>
                     </div>

                     <div style="clear:both"></div>

                     <div id="sbin-buttons">
                             <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                             <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                     </div>
             </div>

     </div>
 </div>
                 </div>	
             
             <div class="u-cb spcr vi-bbox-spcr10"></div>
     <div class="u-cb  ">
             <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
             <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
             <span>
                         <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                         Agregar al carro de compras<span class="clipped"> - </span>
                         </a>
                     </span>
                     </div>
         <div class="u-cb spcr"></div>
         </div>

 <div class="watchListCmp ">
<div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
<div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
     <div class=" u-flL ">
                 <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
     <a i="-99" n="Watch list" href="">
         <span class="vi-atw-icn"></span>
         <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
         <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
     </a>
 </div>
 
 <div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
     <span class="vi-atw-full-lnk">
         <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
     </span>
 </div>
 
 </div>


             <div class="vi-bbox-dspn u-cb spcr"></div>
             </div><div id="why2buy"><div class="w2b w2bsls">
     <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">1.440 vendido(s)</span></div>
             <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Mas de 93% vendidos</span></div>
             <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Envio gratis</span></div>
             </div>
</div></div>
     <div id="vi-lkhdr-v4-plchdr"></div>
         <div id="vi-spw-atf">
                         </div>
                 <div id="shippingSummary"><div class="u-cb spcr"></div>
                 <div class="u-cb spcr"></div>
 <div>
 <div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
 <div class="u-flL sh-col">
 <span id="shSummary">
     <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                         <span>
                                            GRATIS </span>
                                 </span> 
                                 <span id="fShippingSvc">
                                    Economy Shipping from China/Hong Kong/Taiwan to worldwide   
                                            </span>
     <span aria-hidden="true"> | </span>
     <span>
         <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
     </span>	

             <div id="sh-not-mayBe" style="display:none"></div>
</span>
 <!-- Build Estimated delivery and CBT message -->
 </div>
 <div class="clear"></div>
</div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                 <div class="u-flL iti-w75 ">
                     <div class="iti-eu-txt iti-spacing">
<div class="iti-eu-label vi-u-flL" id="" style="">
 Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
         <span itemprop="availableAtOrFrom">   China, China


        </span>
     </div>
     <div class="clear"></div>
</div>
</div>
                 <div class="u-cb"></div>
             </div><div class="u-cb"></div>
     <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                 <div class="u-flL iti-w75">
                     <div id="shipsToSummary">
 <div class="iti-eu-txt iti-spacing">
     <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
     <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
         <span itemprop="areaServed">
         todo el mundo<span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                    <span class="hideForAcc">&nbsp;|&nbsp;</span>
                             <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                         </span>			
                     </span>
     </div>
 </div>
 </div>
</div>
             </div><div id="hideDelSec" style="">
     <div id="deliverySummary"><div class="u-cb spcr"></div>
                 <div id="impchSummary" style="display: none;">
 <div class="u-flL lable">Costos de importación:</div>
 <div class="u-flL sh-col">
     <div>
         <span id="impch_show" style="display: none;">
             <span id="impchCost" class="sh-impchCost"></span>		
                (cantidad confirmada al completar la transacción) </span>					
         <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
         <span class="sh-bubble">
             <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
         </span>
         <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                    <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                    <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                 </div>
         </div>
 </div>
     <div>No se cobran cargos de importación adicionales</div>
     </div>
 <div class="u-cb spcr"></div>
</div><div class="u-flL lable">Entrega:</div>
 <div class="u-flL sh-col">
 <span id="delSummary">
         <!-- First shipping service's cost -->
     <!-- PC 5555 cases -->
             <!-- sea changes -->
<div class="sh-grn-top"></div>
<div style="float:left">
Previsto entre el <strong class="vi-acc-del-range"><b>lun. 6 may. y el mié. 15 may.    
</b></strong><span class="sh-bubble" style="padding-left: 5px;">
         <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
     </span>
 </div>	
 <div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
             Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
 </div>
 <div class="sh-grn-btm"></div>
 </span>
 </div>
 </div></div>
     <div class="u-cb spcr"></div>
         <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
 Pagos:</div><div class="u-flL rpColWid">
 <div id="payDet1" class="">
         <div>
 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
         </div>
</div>
     <div class="pd-showGspLegal">
         <div class="u-dspn">
             </div>
     </div>
 </div><div class="u-cb spcr"></div>
         <div id="ret-accept">
         <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
         <div class="u-flL rpColWid">
                 <table width="100%">
                     <tbody><tr>
                         <td class="rpWrapCol">
                             <span style="">
                                 <span id="vi-ret-accrd-txt">El vendedor no acepta devoluciones</span>
                                 
                                        |&nbsp;
                                 <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                                 </span>
                             </td>
                     </tr>
             </tbody></table>
         </div>
     
     </div>

<div class="u-cb spcr"></div>
         <div>
     </div>
</form>
    </div>
</div>`);

        $('#vi_zoom_trigger_mask11').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[10].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[10].nombre}" mskuskip="false">`);
        $('#SummaryPanel11').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
        <div class="vi-swc-lsp">
                <div style="" class="">
        <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[10].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                            <a class="it-sttl" data-mtdes="Dragon Ball Super Vol. 9&quot; Akira Toriyama Jump Comics Manga Comic Book Japón" data-mtsrclang="es-CO" href="#" onclick="return false;">
                            mostrar título original</a>
                            </span>
                            </h1>
        <!-- DO NOT change linkToTagId="rwid" as the catalog response has this ID set  -->
        <div class="vi-hdops-two-clmn-fix">			
            <div style="" class="vi-notify-new-bg-wrapper">
                    <div class="vi-notify-new-bg-dTop" style=""> </div>
                    <div id="vi_notification_new" class="vi-notify-new-bg-dBtm" style="top: -28px;">
                    </div>
                </div>
            </div>		
        </div>
    <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                    </div>
            <span id="vi-lkhdr-itmTitl" class="u-dspn">Dragon Ball Super Vol. 9 Akira Toriyama Jump Comics Manga Comic Book Japón</span>
</div>
        <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">

    <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
    <form action="" method="post" name="viactiondetails">
        <div class="c-std vi-ds3cont-box-marpad ">
     <div class="nonActPanel ">
     <div>
 <div class="u-flL lable">
     Estado:</div>
 <div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">__${res[10].estado}</div>
     </div>

<!-- offscreen timer widget -->
         <!-- some comment -->
         <!-- volume pricing -->
                 <div class="u-cb spcr"></div>
                
             <div class="u-cb spcr "></div>
<div class="">
 <div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
 <div>		
     <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
         <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
             <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
         </div>
         
         <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
         
         <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
                     <span id="qtySubTxt">
                             <span class="">
                             9 disponible(s)</span>
                         </span>
                     <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
             <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
         <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">32 vendidos</a></span>
     </span>
             
         
         <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
         <!-- generating Id's array -->
         <div class="u-dspn"> 
             <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
             <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
             <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
             <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
             <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
             <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
             <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
         </div>
     </div>
 </div>
 <div class="u-cb spcr"></div>
 </div>
</div>
     <div class="actPanel ">	
     <div id="vi-orgPrc-container" style=" display:block; ">
     <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
     <div class="u-cb  vi-VR-prcTmt-hide">
         <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
 Precio:</div><span id="orgPrc" class="notranslate ms-orp">
 ${res[10].precio}</span>
                 <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                     <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                         <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                         <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                     </div>
                 </div>
 </div>
 </div>
 <div id="vi-youSaveSTP-container" style=" display:block; ">
     <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
     </div>
 <div class="u-cb spcr  vi-bbox-spcr15 "></div>
 <div class="u-cb">
    <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl"></div>
        <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">

<span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">      </span>
<div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">      </div>
<span itemprop="availability" content="https://schema.org/InStock"></span>
<span itemprop="priceCurrency" content="USD"></span>
<!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
<!-- Vat Excluded message -->
</div>
                     <div class="u-flL">
                         <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white; margin-left: 199px" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
                         ¡Cómpralo ahora!<span class="clipped"> - </span>
                         </a>
                     <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                     <div id="streamline-bin-layer-content">
                             <div id="sbin-image-content">
                                     <img id="sbin-image" src="" alt="Nuevo-Samsung-Galaxy-Tab-e-Lite-7-034-Quad-Core-8GB-Rom-Wifi-Bt-Tablet-Android-Blanco">
                             </div>
                             <div id="sbin-text-content">
                                     <p class="sbin-title">Dragon Ball Super Vol. 9 Akira Toriyama Jump Comics Manga Comic Book Japón</p>
                             </div>
                     </div>

                     <div style="clear:both"></div>

                     <div id="sbin-buttons">
                             <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                             <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                     </div>
             </div>

     </div>
 </div>
                 </div>	
             
             <div class="u-cb spcr vi-bbox-spcr10"></div>
     <div class="u-cb  ">
             <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
             <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
             <span>
                         <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                         Agregar al carro de compras<span class="clipped"> - </span>
                         </a>
                     </span>
                     </div>
         <div class="u-cb spcr"></div>
         </div>

 <div class="watchListCmp ">
<div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
<div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
     <div class=" u-flL ">
                 <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
     <a i="-99" n="Watch list" href="">
         <span class="vi-atw-icn"></span>
         <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
         <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
     </a>
 </div>
 
 <div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
     <span class="vi-atw-full-lnk">
         <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
     </span>
 </div>
 
 </div>


             <div class="vi-bbox-dspn u-cb spcr"></div>
             </div><div id="why2buy"><div class="w2b w2bsls">
     <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">100% de satisfaccion del comprador</span></div>
             <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Cantidad restante limitada</span></div>
             <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Mas de 77% vendidos</span></div>
             </div>
</div></div>
     <div id="vi-lkhdr-v4-plchdr"></div>
         <div id="vi-spw-atf">
                         </div>
                 <div id="shippingSummary"><div class="u-cb spcr"></div>
                 <div class="u-cb spcr"></div>
 <div>
 <div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
 <div class="u-flL sh-col">
 <span id="shSummary">
     <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                         <span>
                                            GRATIS </span>
                                 </span> 
                                 <span id="fShippingSvc">
                                    Economy Shipping from outside US 
                                            </span>
     <span aria-hidden="true"> | </span>
     <span>
         <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
     </span>	

             <div id="sh-not-mayBe" style="display:none"></div>
</span>
 <!-- Build Estimated delivery and CBT message -->
 </div>
 <div class="clear"></div>
</div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                 <div class="u-flL iti-w75 ">
                     <div class="iti-eu-txt iti-spacing">
<div class="iti-eu-label vi-u-flL" id="" style="">
 Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
         <span itemprop="availableAtOrFrom">  musasimurayama-shi, Japón
        </span>
     </div>
     <div class="clear"></div>
</div>
</div>
                 <div class="u-cb"></div>
             </div><div class="u-cb"></div>
     <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                 <div class="u-flL iti-w75">
                     <div id="shipsToSummary">
 <div class="iti-eu-txt iti-spacing">
     <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
     <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
         <span itemprop="areaServed">
         todo el mundo<span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                    <span class="hideForAcc">&nbsp;|&nbsp;</span>
                             <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                         </span>			
                     </span>
     </div>
 </div>
 </div>
</div>
             </div><div id="hideDelSec" style="">
     <div id="deliverySummary"><div class="u-cb spcr"></div>
                 <div id="impchSummary" style="display: none;">
 <div class="u-flL lable">Costos de importación:</div>
 <div class="u-flL sh-col">
     <div>
         <span id="impch_show" style="display: none;">
             <span id="impchCost" class="sh-impchCost"></span>		
                (cantidad confirmada al completar la transacción) </span>					
         <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
         <span class="sh-bubble">
             <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
         </span>
         <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                    <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                    <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                 </div>
         </div>
 </div>
     <div>No se cobran cargos de importación adicionales</div>
     </div>
 <div class="u-cb spcr"></div>
</div><div class="u-flL lable">Entrega:</div>
 <div class="u-flL sh-col">
 <span id="delSummary">
         <!-- First shipping service's cost -->
     <!-- PC 5555 cases -->
             <!-- sea changes -->
<div class="sh-grn-top"></div>
<div style="float:left">
Previsto entre el <strong class="vi-acc-del-range"><b>vie. 3 may. y el lun. 20 may.      
</b></strong><span class="sh-bubble" style="padding-left: 5px;">
         <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
     </span>
 </div>	
 <div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
             Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
 </div>
 <div class="sh-grn-btm"></div>
 </span>
 </div>
 </div></div>
     <div class="u-cb spcr"></div>
         <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
 Pagos:</div><div class="u-flL rpColWid">
 <div id="payDet1" class="">
         <div>
 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
         </div>
</div>
     <div class="pd-showGspLegal">
         <div class="u-dspn">
             </div>
     </div>
 </div><div class="u-cb spcr"></div>
         <div id="ret-accept">
         <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
         <div class="u-flL rpColWid">
                 <table width="100%">
                     <tbody><tr>
                         <td class="rpWrapCol">
                             <span style="">
                                 <span id="vi-ret-accrd-txt">El vendedor no acepta devoluciones</span>
                                 
                                        |&nbsp;
                                 <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                                 </span>
                             </td>
                     </tr>
             </tbody></table>
         </div>
     
     </div>

<div class="u-cb spcr"></div>
         <div>
     </div>
</form>
    </div>
</div>`);

        $('#vi_zoom_trigger_mask12').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[11].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[11].nombre}" mskuskip="false">`);
        $('#SummaryPanel12').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
        <div class="vi-swc-lsp">
                <div style="" class="">
        <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[11].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                            <a class="it-sttl" data-mtdes="Call of Duty Zombies &quot; Cartel GameStop exclusivo Segunda Guerra Mundial Guerra Mundial 2 Nazi Zombies 2017" data-mtsrclang="es-CO" href="#" onclick="return false;">
                            mostrar título original</a>
                            </span>
                            </h1>
        <!-- DO NOT change linkToTagId="rwid" as the catalog response has this ID set  -->
        <div class="vi-hdops-two-clmn-fix">			
            <div style="" class="vi-notify-new-bg-wrapper">
                    <div class="vi-notify-new-bg-dTop" style=""> </div>
                    <div id="vi_notification_new" class="vi-notify-new-bg-dBtm" style="top: -28px;">
                    </div>
                </div>
            </div>		
        </div>
    <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                    </div>
            <span id="vi-lkhdr-itmTitl" class="u-dspn">Call of Duty Zombies Cartel GameStop exclusivo Segunda Guerra Mundial Guerra Mundial 2 Nazi Zombies 2017</span>
</div>
        <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">

    <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
    <form action="" method="post" name="viactiondetails">
        <div class="c-std vi-ds3cont-box-marpad ">
     <div class="nonActPanel ">
     <div>
 <div class="u-flL lable">
     Estado:</div>
 <div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">__${res[11].estado}</div>
     </div>

<!-- offscreen timer widget -->
         <!-- some comment -->
         <!-- volume pricing -->
                 <div class="u-cb spcr"></div>
                
             <div class="u-cb spcr "></div>
<div class="">
 <div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
 <div>		
     <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
         <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
             <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
         </div>
         
         <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
         
         <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
                     <span id="qtySubTxt">
                             <span class="">
                             2 disponible(s)</span>
                         </span>
             <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
         <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564"></a></span>
     </span>
             
         
         <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
         <!-- generating Id's array -->
         <div class="u-dspn"> 
             <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
             <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
             <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
             <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
             <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
             <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
             <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
         </div>
     </div>
 </div>
 <div class="u-cb spcr"></div>
 </div>
</div>
     <div class="actPanel ">	
     <div id="vi-orgPrc-container" style=" display:block; ">
     <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
     <div class="u-cb  vi-VR-prcTmt-hide">
         <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
 Precio:</div><span id="orgPrc" class="notranslate ms-orp">
 ${res[11].precio}</span>
                 <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                     <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                         <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                         <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                     </div>
                 </div>
 </div>
 </div>
 <div id="vi-youSaveSTP-container" style=" display:block; ">
     <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
     </div>
 <div class="u-cb spcr  vi-bbox-spcr15 "></div>
 <div class="u-cb">
    <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl"></div>
        <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">

<span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">      </span>
<div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">      </div>
<span itemprop="availability" content="https://schema.org/InStock"></span>
<span itemprop="priceCurrency" content="USD"></span>
<!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
<!-- Vat Excluded message -->
</div>
                     <div class="u-flL">
                         <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white; margin-left: 199px" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
                         ¡Cómpralo ahora!<span class="clipped"> - </span>
                         </a>
                     <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                     <div id="streamline-bin-layer-content">
                             <div id="sbin-image-content">
                                     <img id="sbin-image" src="" alt="Call of Duty Zombies Cartel GameStop exclusivo Segunda Guerra Mundial Guerra Mundial 2 Nazi Zombies 2017">
                             </div>
                             <div id="sbin-text-content">
                                     <p class="sbin-title">Call of Duty Zombies Cartel GameStop exclusivo Segunda Guerra Mundial Guerra Mundial 2 Nazi Zombies 2017</p>
                             </div>
                     </div>

                     <div style="clear:both"></div>

                     <div id="sbin-buttons">
                             <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                             <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                     </div>
             </div>

     </div>
 </div>
                 </div>	
             
             <div class="u-cb spcr vi-bbox-spcr10"></div>
     <div class="u-cb  ">
             <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
             <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
             <span>
                         <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                         Agregar al carro de compras<span class="clipped"> - </span>
                         </a>
                     </span>
                     </div>
         <div class="u-cb spcr"></div>
         </div>

 <div class="watchListCmp ">
<div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
<div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
     <div class=" u-flL ">
                 <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
     <a i="-99" n="Watch list" href="">
         <span class="vi-atw-icn"></span>
         <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
         <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
     </a>
 </div>
 
 <div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
     <span class="vi-atw-full-lnk">
         <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
     </span>
 </div>
 
 </div>


             <div class="vi-bbox-dspn u-cb spcr"></div>
             </div><div id="why2buy"><div class="w2b w2bsls">
     <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">Envio Gratis</span></div>
             <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Realiza envios desde Estados Unidos</span></div>
             <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">6 lo marcaron como favoritos</span></div>
             </div>
</div></div>
     <div id="vi-lkhdr-v4-plchdr"></div>
         <div id="vi-spw-atf">
                         </div>
                 <div id="shippingSummary"><div class="u-cb spcr"></div>
                 <div class="u-cb spcr"></div>
 <div>
 <div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
 <div class="u-flL sh-col">
 <span id="shSummary">
     <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                         <span>
                                            GRATIS </span>
                                 </span> 
                                 <span id="fShippingSvc">
                                    Envio Estandar
                                            </span>
     <span aria-hidden="true"> | </span>
     <span>
         <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
     </span>	

             <div id="sh-not-mayBe" style="display:none"></div>
</span>
 <!-- Build Estimated delivery and CBT message -->
 </div>
 <div class="clear"></div>
</div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                 <div class="u-flL iti-w75 ">
                     <div class="iti-eu-txt iti-spacing">
<div class="iti-eu-label vi-u-flL" id="" style="">
 Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
         <span itemprop="availableAtOrFrom"> Orinda, California, Estados Unidos
        </span>
     </div>
     <div class="clear"></div>
</div>
</div>
                 <div class="u-cb"></div>
             </div><div class="u-cb"></div>
     <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                 <div class="u-flL iti-w75">
                     <div id="shipsToSummary">
 <div class="iti-eu-txt iti-spacing">
     <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
     <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
         <span itemprop="areaServed">
         Estados Unidos<span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                    <span class="hideForAcc">&nbsp;|&nbsp;</span>
                             <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                         </span>			
                     </span>
     </div>
 </div>
 </div>
</div>
             </div><div id="hideDelSec" style="">
     <div id="deliverySummary"><div class="u-cb spcr"></div>
                 <div id="impchSummary" style="display: none;">
 <div class="u-flL lable">Costos de importación:</div>
 <div class="u-flL sh-col">
     <div>
         <span id="impch_show" style="display: none;">
             <span id="impchCost" class="sh-impchCost"></span>		
                (cantidad confirmada al completar la transacción) </span>					
         <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
         <span class="sh-bubble">
             <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
         </span>
         <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                    <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                    <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                 </div>
         </div>
 </div>
     <div>No se cobran cargos de importación adicionales</div>
     </div>
 <div class="u-cb spcr"></div>
</div><div class="u-flL lable">Entrega:</div>
 <div class="u-flL sh-col">
 <span id="delSummary">
         <!-- First shipping service's cost -->
     <!-- PC 5555 cases -->
             <!-- sea changes -->
<div class="sh-grn-top"></div>
<div style="float:left">
Previsto entre el <strong class="vi-acc-del-range"><b>  vie. 26 abr. y el mié. 1 may.      
</b></strong><span class="sh-bubble" style="padding-left: 5px;">
         <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
     </span>
 </div>	
 <div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
             Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
 </div>
 <div class="sh-grn-btm"></div>
 </span>
 </div>
 </div></div>
     <div class="u-cb spcr"></div>
         <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
 Pagos:</div><div class="u-flL rpColWid">
 <div id="payDet1" class="">
         <div>
 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
         </div>
</div>
     <div class="pd-showGspLegal">
         <div class="u-dspn">
             </div>
     </div>
 </div><div class="u-cb spcr"></div>
         <div id="ret-accept">
         <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
         <div class="u-flL rpColWid">
                 <table width="100%">
                     <tbody><tr>
                         <td class="rpWrapCol">
                             <span style="">
                                 <span id="vi-ret-accrd-txt">El vendedor no acepta devoluciones</span>
                                 
                                        |&nbsp;
                                 <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                                 </span>
                             </td>
                     </tr>
             </tbody></table>
         </div>
     
     </div>

<div class="u-cb spcr"></div>
         <div>
     </div>
</form>
    </div>
</div>`);

        $('#vi_zoom_trigger_mask13').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[12].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[12].nombre}" mskuskip="false">`);
        $('#SummaryPanel13').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
        <div class="vi-swc-lsp">
                <div style="" class="">
        <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[12].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                            <a class="it-sttl" data-mtdes="AmScope 3.5X-90X zoom trinocular microscopio estéreo'&quot; , con soporte de mesa Pilar" data-mtsrclang="es-CO" href="#" onclick="return false;">
                            mostrar título original</a>
                            </span>
                            </h1><!--[if IE 7]>
            <div id="vi-itt-filler"></div>
            <![endif]-->
            <h2 id="subTitle" class="it-sttl">
                <span data-mtdes="Ships fast! See our feedback!" data-mtsrclang="es-CO"></span>
                                </h2>	
                                <div class="vi-hdops-two-clmn-fix">			
    <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                    </div>
            <span id="vi-lkhdr-itmTitl" class="u-dspn">AmScope 3.5X-90X zoom trinocular microscopio estéreo con soporte de mesa Pilar</span>
</div>
        <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">

    <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
    <form action="" method="post" name="viactiondetails">
        <div class="c-std vi-ds3cont-box-marpad ">
     <div class="nonActPanel ">
     <div>
 <div class="u-flL lable">
     Estado:</div>
 <div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[12].estado}</div>
     </div>

<!-- offscreen timer widget -->
         <!-- some comment -->
         <!-- volume pricing -->
                 <div class="u-cb spcr"></div>
                                 <div>
 <div class="vi-tiers u-flL">
        
         </div>
</div><!-- volume pricing ends -->
             <div class="u-cb spcr "></div>
<div class="">
 <div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
 <div>		
     <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
         <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
             <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
         </div>
         
         <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
         
         <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
                     <span id="qtySubTxt">
                             <span class="">
                             Existencias limitadas</span>
                         </span>
                     <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
             <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
         <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">994 vendidos</a></span>
     </span>
             
         
         <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
         <!-- generating Id's array -->
         <div class="u-dspn"> 
             <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
             <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
             <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
             <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
             <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
             <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
             <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
         </div>
     </div>
 </div>
 <div class="u-cb spcr"></div>
 </div>
</div>
     <div class="actPanel ">	
     <div id="vi-orgPrc-container" style=" display:block; ">
     <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
     <div class="u-cb  vi-VR-prcTmt-hide">
         <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
 Precio de venta:</div><span id="orgPrc" class="notranslate ms-orp">
 ${res[12].precio}</span>
                 <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                     <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                         <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                         <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                     </div>
                 </div>
 </div>
 </div>
 <div id="vi-youSaveSTP-container" style=" display:block; ">
     <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
     <div class="u-cb ms-as-rw vi-VR-prcTmt-hide">
         <div class="u-flL lable" id="youSaveSTP-lbl" style="">
 Ahorras:</div><span id="youSaveSTP" class="notranslate ms-as">
                 USD259.00 (47%&nbsp;de descuento)</span>
</div>
     </div>
 <div class="u-cb spcr  vi-bbox-spcr15 "></div>

             <div class="u-cb">
                 <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl">Ahora:</div>
                     <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">
         
 <span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">${res[12].precioActual}</span>
 <div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">Envío gratuito</div>
     <span itemprop="availability" content="https://schema.org/InStock"></span>
 <span itemprop="priceCurrency" content="USD"></span>
 <!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
 <!-- Vat Excluded message -->
 </div>
<!-- inserting code for another button -->
                     <!-- code ends  -->
                     <div class="u-flL">
                         <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white;" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
                         ¡Cómpralo ahora!<span class="clipped"> - </span>
                         </a>
                     <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                     <div id="streamline-bin-layer-content">
                             <div id="sbin-image-content">
                                     <img id="sbin-image" src="" alt="AmScope 3.5X-90X zoom trinocular microscopio estéreo con soporte de mesa Pilar">
                             </div>
                             <div id="sbin-text-content">
                                     <p class="sbin-title">AmScope 3.5X-90X zoom trinocular microscopio estéreo con soporte de mesa Pilar</p>
                             </div>
                     </div>

                     <div style="clear:both"></div>

                     <div id="sbin-buttons">
                             <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                             <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                     </div>
             </div>

     </div>
 </div>
                 </div>	
             
             <div class="u-cb spcr vi-bbox-spcr10"></div>
     <div class="u-cb  ">
             <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
             <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
             <span>
                         <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                         Agregar al carro de compras<span class="clipped"> - </span>
                         </a>
                     </span>
                     </div>
         <div class="u-cb spcr"></div>
         </div>

 <div class="watchListCmp ">
<div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
<div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
     <div class=" u-flL ">
                 <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
     <a i="-99" n="Watch list" href="">
         <span class="vi-atw-icn"></span>
         <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
         <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
     </a>
 </div>
 
 <div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
     <span class="vi-atw-full-lnk">
         <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
     </span>
 </div>
 
 </div>


             <div class="vi-bbox-dspn u-cb spcr"></div>
             </div><div id="why2buy"><div class="w2b w2bsls">
     <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">100% de satisfaccion del comprador</span></div>
             <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">994 vendido(s)</span></div>
             <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Entrga gratis en 4 dias</span></div>
             </div>
</div></div>
     <div id="vi-lkhdr-v4-plchdr"></div>
         <div id="vi-spw-atf">
                         </div>
                 <div id="shippingSummary"><div class="u-cb spcr"></div>
                 <div class="u-cb spcr"></div>
 <div>
 <div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
 <div class="u-flL sh-col">
 <span id="shSummary">
     <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                         <span>GRATIS</span>
                                 </span>                            
             <span id="fShippingSvc">
             Standard Shipping<!-- GSP -->
                     </span>
     <span aria-hidden="true"> | </span>
     <span>
         <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
     </span>	

             <div id="sh-not-mayBe" style="display:none"></div>
</span>
 <!-- Build Estimated delivery and CBT message -->
 </div>
 <div class="clear"></div>
</div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                 <div class="u-flL iti-w75 ">
                     <div class="iti-eu-txt iti-spacing">
<div class="iti-eu-label vi-u-flL" id="" style="">
 Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
         <span itemprop="availableAtOrFrom"> Irvine, California, Estados Unidos
        </span>
     </div>
     <div class="clear"></div>
</div>
</div>
                 <div class="u-cb"></div>
             </div><div class="u-cb"></div>
     <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                 <div class="u-flL iti-w75">
                     <div id="shipsToSummary">
 <div class="iti-eu-txt iti-spacing">
     <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
     <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
         <span itemprop="areaServed">
            Estados Unidos y muchos otros países <span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                    <span class="hideForAcc">&nbsp;|&nbsp;</span>
                             <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                         </span>			
                     </span>
     </div>
 </div>
 </div>
</div>
             </div><div id="hideDelSec" style="">
     <div id="deliverySummary"><div class="u-cb spcr"></div>
                 <div id="impchSummary" style="display: none;">
 <div class="u-flL lable">Costos de importación:</div>
 <div class="u-flL sh-col">
     <div>
         <span id="impch_show" style="display: none;">
             <span id="impchCost" class="sh-impchCost"></span>		
                (cantidad confirmada al completar la transacción) </span>					
         <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
         <span class="sh-bubble">
             <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
         </span>
         <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                    <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                    <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                 </div>
         </div>
 </div>
     <div>No se cobran cargos de importación adicionales</div>
     </div>
 <div class="u-cb spcr"></div>
</div><div class="u-flL lable">Entrega:</div>
 <div class="u-flL sh-col">
 <span id="delSummary">
         <!-- First shipping service's cost -->
     <!-- PC 5555 cases -->
             <!-- sea changes -->
<div class="sh-grn-top"></div>
<div style="float:left">
     Entrega prevista el o antes del <strong class="vi-acc-del-range"><b>vie. 26 abr.  </b></strong><span class="sh-bubble" style="padding-left: 5px;">
         <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
     </span>
 </div>	
 <div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
             Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
 </div>
 <div class="sh-grn-btm"></div>
 </span>
 </div>
 </div></div>
     <div class="u-cb spcr"></div>
         <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
 Pagos:</div><div class="u-flL rpColWid">
 <div id="payDet1" class="">
         <div>
 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
         </div>
</div>
     <div class="pd-showGspLegal">
     </div>
 </div><div class="u-cb spcr"></div>
         <div id="ret-accept">
         <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
         <div class="u-flL rpColWid">
                 <table width="100%">
                     <tbody><tr>
                         <td class="rpWrapCol">
                             <span style="">
                                 <span id="vi-ret-accrd-txt">30 día devoluciones. El comprador paga por la devolución del artículo </span>
                                 
                                        |&nbsp;
                                 <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                                 </span>
                             </td>
                     </tr>
             </tbody></table>
         </div>
     
     </div>

<div class="u-cb spcr"></div>
         <div>
     </div>
</form>

    </div>


<!-- The attribute(value) of UseScriptTag is null. --></div>
</div>
</div>`);

        $('#vi_zoom_trigger_mask14').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[13].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[13].nombre}" mskuskip="false">`);
        $('#SummaryPanel14').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
        <div class="vi-swc-lsp">
                <div style="" class="">
        <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[13].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                            <a class="it-sttl" data-mtdes="Motorcycle Cover Waterproof&quot; Outdoor Rain Dust UV Scooter Motorbike Protector 3XL" data-mtsrclang="es-CO" href="#" onclick="return false;">
                            mostrar título original</a>
                            </span>
                            </h1>
        <!-- DO NOT change linkToTagId="rwid" as the catalog response has this ID set  -->
        <div class="vi-hdops-two-clmn-fix">			
            <div style="" class="vi-notify-new-bg-wrapper">
                    <div class="vi-notify-new-bg-dTop" style=""> </div>
                    <div id="vi_notification_new" class="vi-notify-new-bg-dBtm" style="top: -28px;">
                    </div>
                </div>
            </div>		
        </div>
    <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                    </div>
            <span id="vi-lkhdr-itmTitl" class="u-dspn">Dental intraoral inalámbrico WiFi Mini HD Cámara Oral Ajuste Iphone Android Windows</span>
</div>
        <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">

    <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
    <form action="" method="post" name="viactiondetails">
        <div class="c-std vi-ds3cont-box-marpad ">
     <div class="nonActPanel ">
     <div>
 <div class="u-flL lable">
     Estado:</div>
 <div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[13].estado}</div>
     </div>

<!-- offscreen timer widget -->
         <!-- some comment -->
         <!-- volume pricing -->
                 <div class="u-cb spcr"></div>
                
             <div class="u-cb spcr "></div>
<div class="">
 <div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
 <div>		
     <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
         <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
             <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
         </div>
         
         <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
         
         <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
                     <span id="qtySubTxt">
                             <span class="">
                             4 disponible(s)</span>
                         </span>
                     <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
             <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
         <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">11 vendidos</a></span>
     </span>
             
         
         <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
         <!-- generating Id's array -->
         <div class="u-dspn"> 
             <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
             <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
             <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
             <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
             <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
             <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
             <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
         </div>
     </div>
 </div>
 <div class="u-cb spcr"></div>
 </div>
</div>
     <div class="actPanel ">	
     <div id="vi-orgPrc-container" style=" display:block; ">
     <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
     <div class="u-cb  vi-VR-prcTmt-hide">
         <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
 Precio:</div><span id="orgPrc" class="notranslate ms-orp">
 ${res[13].precio}</span>
                 <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                     <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                         <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                         <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                     </div>
                 </div>
 </div>
 </div>
 <div id="vi-youSaveSTP-container" style=" display:block; ">
     <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
     </div>
 <div class="u-cb spcr  vi-bbox-spcr15 "></div>
 <div class="u-cb">
    <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl"></div>
        <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">

<span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">      </span>
<div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">      </div>
<span itemprop="availability" content="https://schema.org/InStock"></span>
<span itemprop="priceCurrency" content="USD"></span>
<!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
<!-- Vat Excluded message -->
</div>
                     <div class="u-flL">
                         <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white; margin-left: 199px" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
                         ¡Cómpralo ahora!<span class="clipped"> - </span>
                         </a>
                     <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                     <div id="streamline-bin-layer-content">
                             <div id="sbin-image-content">
                                     <img id="sbin-image" src="" alt="Dental intraoral inalámbrico WiFi Mini HD Cámara Oral Ajuste Iphone Android Windows">
                             </div>
                             <div id="sbin-text-content">
                                     <p class="sbin-title">Dental intraoral inalámbrico WiFi Mini HD Cámara Oral Ajuste Iphone Android Windows</p>
                             </div>
                     </div>

                     <div style="clear:both"></div>

                     <div id="sbin-buttons">
                             <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                             <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                     </div>
             </div>

     </div>
 </div>
                 </div>	
             
             <div class="u-cb spcr vi-bbox-spcr10"></div>
     <div class="u-cb  ">
             <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
             <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
             <span>
                         <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                         Agregar al carro de compras<span class="clipped"> - </span>
                         </a>
                     </span>
                     </div>
         <div class="u-cb spcr"></div>
         </div>

 <div class="watchListCmp ">
<div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
<div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
     <div class=" u-flL ">
                 <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
     <a i="-99" n="Watch list" href="">
         <span class="vi-atw-icn"></span>
         <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
         <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
     </a>
 </div>
 
 <div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
     <span class="vi-atw-full-lnk">
         <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
     </span>
 </div>
 
 </div>


             <div class="vi-bbox-dspn u-cb spcr"></div>
             </div><div id="why2buy"><div class="w2b w2bsls">
     <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">Cantidad restante limitada</span></div>
             <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Más de 72% vendidos</span></div>
             <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Envío gratis</span></div>
             </div>
</div></div>
     <div id="vi-lkhdr-v4-plchdr"></div>
         <div id="vi-spw-atf">
                         </div>
                 <div id="shippingSummary"><div class="u-cb spcr"></div>
                 <div class="u-cb spcr"></div>
 <div>
 <div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
 <div class="u-flL sh-col">
 <span id="shSummary">
     <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                         <span>
                                            GRATIS </span>
                                 </span> 
                                 <span id="fShippingSvc">
                                    Economy Shipping from outside US   
                                            </span>
     <span aria-hidden="true"> | </span>
     <span>
         <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
     </span>	

             <div id="sh-not-mayBe" style="display:none"></div>
</span>
 <!-- Build Estimated delivery and CBT message -->
 </div>
 <div class="clear"></div>
</div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                 <div class="u-flL iti-w75 ">
                     <div class="iti-eu-txt iti-spacing">
<div class="iti-eu-label vi-u-flL" id="" style="">
 Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
         <span itemprop="availableAtOrFrom">  CN, China
        </span>
     </div>
     <div class="clear"></div>
</div>
</div>
                 <div class="u-cb"></div>
             </div><div class="u-cb"></div>
     <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
                 <div class="u-flL iti-w75">
                     <div id="shipsToSummary">
 <div class="iti-eu-txt iti-spacing">
     <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
     <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
         <span itemprop="areaServed">
         todo el mundo<span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                    <span class="hideForAcc">&nbsp;|&nbsp;</span>
                             <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                         </span>			
                     </span>
     </div>
 </div>
 </div>
</div>
             </div><div id="hideDelSec" style="">
     <div id="deliverySummary"><div class="u-cb spcr"></div>
                 <div id="impchSummary" style="display: none;">
 <div class="u-flL lable">Costos de importación:</div>
 <div class="u-flL sh-col">
     <div>
         <span id="impch_show" style="display: none;">
             <span id="impchCost" class="sh-impchCost"></span>		
                (cantidad confirmada al completar la transacción) </span>					
         <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
         <span class="sh-bubble">
             <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
         </span>
         <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                    <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                    <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                 </div>
         </div>
 </div>
     <div>No se cobran cargos de importación adicionales</div>
     </div>
 <div class="u-cb spcr"></div>
</div><div class="u-flL lable">Entrega:</div>
 <div class="u-flL sh-col">
 <span id="delSummary">
         <!-- First shipping service's cost -->
     <!-- PC 5555 cases -->
             <!-- sea changes -->
<div class="sh-grn-top"></div>
<div style="float:left">
Previsto entre el <strong class="vi-acc-del-range"><b>mar. 21 may. y el mar. 2 jul.    
</b></strong><span class="sh-bubble" style="padding-left: 5px;">
         <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
     </span>
 </div>	
 <div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
             Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
 </div>
 <div class="sh-grn-btm"></div>
 </span>
 </div>
 </div></div>
     <div class="u-cb spcr"></div>
         <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
 Pagos:</div><div class="u-flL rpColWid">
 <div id="payDet1" class="">
         <div>
 <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
         <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
         </div>
</div>
     <div class="pd-showGspLegal">
         <div class="u-dspn">
             </div>
     </div>
 </div><div class="u-cb spcr"></div>
         <div id="ret-accept">
         <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
         <div class="u-flL rpColWid">
                 <table width="100%">
                     <tbody><tr>
                         <td class="rpWrapCol">
                             <span style="">
                                 <span id="vi-ret-accrd-txt">
                                    30 día devoluciones. El comprador paga por la devolución del artículo </span>
                                        |&nbsp;
                                 <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                                 </span>
                             </td>
                     </tr>
             </tbody></table>
         </div>
     
     </div>

<div class="u-cb spcr"></div>
         <div>
     </div>
</form>
    </div>
</div>`);

     $('#vi_zoom_trigger_mask15').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[14].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[14].nombre}" mskuskip="false">`);
     $('#SummaryPanel15').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
     <div class="vi-swc-lsp">
             <div style="" class="">
     <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[14].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                         <a class="it-sttl" data-mtdes="Mens 700c Schwinn Solara Bike-Black'&quot; ." data-mtsrclang="es-CO" href="#" onclick="return false;">
                         mostrar título original</a>
                         </span>
                         </h1><!--[if IE 7]>
         <div id="vi-itt-filler"></div>
         <![endif]-->
         <h2 id="subTitle" class="it-sttl">
             <span data-mtdes="Ships fast! See our feedback!" data-mtsrclang="es-CO"></span>
                             </h2>	
                             <div class="vi-hdops-two-clmn-fix">			
 <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                 </div>
         <span id="vi-lkhdr-itmTitl" class="u-dspn">Mens 700c Schwinn Solara Bike-Black</span>
</div>
     <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">

 <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
 <form action="" method="post" name="viactiondetails">
     <div class="c-std vi-ds3cont-box-marpad ">
  <div class="nonActPanel ">
  <div>
<div class="u-flL lable">
  Estado:</div>
<div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[14].estado}</div>
  </div>

<!-- offscreen timer widget -->
      <!-- some comment -->
      <!-- volume pricing -->
              <div class="u-cb spcr"></div>
                              <div>
<div class="vi-tiers u-flL">
     
      </div>
</div><!-- volume pricing ends -->
          <div class="u-cb spcr "></div>
<div class="">
<div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
<div>		
  <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
      <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
          <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
      </div>
      
      <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
      
      <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
                  <span id="qtySubTxt">
                          <span class="">
                             Más de 10 disponibles </span>
                      </span>
                  <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
          <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
      <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">105 vendidos</a></span>
  </span>
          
      
      <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
      <!-- generating Id's array -->
      <div class="u-dspn"> 
          <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
          <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
          <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
          <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
          <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
          <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
          <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
      </div>
  </div>
</div>
<div class="u-cb spcr"></div>
</div>
</div>
  <div class="actPanel ">	
  <div id="vi-orgPrc-container" style=" display:block; ">
  <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
  <div class="u-cb  vi-VR-prcTmt-hide">
      <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
Precio de venta:</div><span id="orgPrc" class="notranslate ms-orp">
${res[14].precio}</span>
              <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                  <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                      <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                      <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                  </div>
              </div>
</div>
</div>
<div id="vi-youSaveSTP-container" style=" display:block; ">
  <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
  <div class="u-cb ms-as-rw vi-VR-prcTmt-hide">
      <div class="u-flL lable" id="youSaveSTP-lbl" style="">
Ahorras:</div><span id="youSaveSTP" class="notranslate ms-as">
              USD70.00 (31%&nbsp;de descuento)</span>
</div>
  </div>
<div class="u-cb spcr  vi-bbox-spcr15 "></div>

          <div class="u-cb">
              <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl">Ahora:</div>
                  <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">
      
<span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">${res[14].precioActual}</span>
<div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">Envío gratuito</div>
  <span itemprop="availability" content="https://schema.org/InStock"></span>
<span itemprop="priceCurrency" content="USD"></span>
<!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
<!-- Vat Excluded message -->
</div>
<!-- inserting code for another button -->
                  <!-- code ends  -->
                  <div class="u-flL">
                      <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white;" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
                      ¡Cómpralo ahora!<span class="clipped"> - </span>
                      </a>
                  <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                  <div id="streamline-bin-layer-content">
                          <div id="sbin-image-content">
                                  <img id="sbin-image" src="" alt="Mens 700c Schwinn Solara Bike-Black">
                          </div>
                          <div id="sbin-text-content">
                                  <p class="sbin-title">Mens 700c Schwinn Solara Bike-Black</p>
                          </div>
                  </div>

                  <div style="clear:both"></div>

                  <div id="sbin-buttons">
                          <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                          <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                  </div>
          </div>

  </div>
</div>
              </div>	
          
          <div class="u-cb spcr vi-bbox-spcr10"></div>
  <div class="u-cb  ">
          <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
          <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
          <span>
                      <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                      Agregar al carro de compras<span class="clipped"> - </span>
                      </a>
                  </span>
                  </div>
      <div class="u-cb spcr"></div>
      </div>

<div class="watchListCmp ">
<div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
<div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
  <div class=" u-flL ">
              <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
  <a i="-99" n="Watch list" href="">
      <span class="vi-atw-icn"></span>
      <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
      <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
  </a>
</div>

<div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
  <span class="vi-atw-full-lnk">
      <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
  </span>
</div>

</div>


          <div class="vi-bbox-dspn u-cb spcr"></div>
          </div><div id="why2buy"><div class="w2b w2bsls">
  <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">100% de satisfaccion del comprador</span></div>
          <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">105 vendido(s)</span></div>
          <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Envío y devoluciones gratis</span></div>
          </div>
</div></div>
  <div id="vi-lkhdr-v4-plchdr"></div>
      <div id="vi-spw-atf">
                      </div>
              <div id="shippingSummary"><div class="u-cb spcr"></div>
              <div class="u-cb spcr"></div>
<div>
<div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
<div class="u-flL sh-col">
<span id="shSummary">
  <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                      <span>GRATIS</span>
                              </span>                            
          <span id="fShippingSvc">
          Envio Gratis
                  </span>
  <span aria-hidden="true"> | </span>
  <span>
      <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
  </span>	

          <div id="sh-not-mayBe" style="display:none"></div>
</span>
<!-- Build Estimated delivery and CBT message -->
</div>
<div class="clear"></div>
</div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
              <div class="u-flL iti-w75 ">
                  <div class="iti-eu-txt iti-spacing">
<div class="iti-eu-label vi-u-flL" id="" style="">
Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
      <span itemprop="availableAtOrFrom"> Vacaville, California, Estados Unidos
     </span>
  </div>
  <div class="clear"></div>
</div>
</div>
              <div class="u-cb"></div>
          </div><div class="u-cb"></div>
  <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
              <div class="u-flL iti-w75">
                  <div id="shipsToSummary">
<div class="iti-eu-txt iti-spacing">
  <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
  <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
      <span itemprop="areaServed">
         Estados Unidos <span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                 <span class="hideForAcc">&nbsp;|&nbsp;</span>
                          <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                      </span>			
                  </span>
  </div>
</div>
</div>
</div>
          </div><div id="hideDelSec" style="">
  <div id="deliverySummary"><div class="u-cb spcr"></div>
              <div id="impchSummary" style="display: none;">
<div class="u-flL lable">Costos de importación:</div>
<div class="u-flL sh-col">
  <div>
      <span id="impch_show" style="display: none;">
          <span id="impchCost" class="sh-impchCost"></span>		
             (cantidad confirmada al completar la transacción) </span>					
      <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
      <span class="sh-bubble">
          <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
      </span>
      <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                 <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                 <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
              </div>
      </div>
</div>
  <div>No se cobran cargos de importación adicionales</div>
  </div>
<div class="u-cb spcr"></div>
</div><div class="u-flL lable">Entrega:</div>
<div class="u-flL sh-col">
<span id="delSummary">
      <!-- First shipping service's cost -->
  <!-- PC 5555 cases -->
          <!-- sea changes -->
<div class="sh-grn-top"></div>
<div style="float:left">
  Entrega prevista el o antes del <strong class="vi-acc-del-range"><b>jue. 25 abr. y el lun. 29 abr. </b></strong><span class="sh-bubble" style="padding-left: 5px;">
      <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
  </span>
</div>	
<div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
          Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
</div>
<div class="sh-grn-btm"></div>
</span>
</div>
</div></div>
  <div class="u-cb spcr"></div>
      <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
Pagos:</div><div class="u-flL rpColWid">
<div id="payDet1" class="">
      <div>
<img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
      </div>
</div>
  <div class="pd-showGspLegal">
  </div>
</div><div class="u-cb spcr"></div>
      <div id="ret-accept">
      <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
      <div class="u-flL rpColWid">
              <table width="100%">
                  <tbody><tr>
                      <td class="rpWrapCol">
                          <span style="">
                              <span id="vi-ret-accrd-txt">
                                 30 días para devoluciones gratuitas </span>
                                     |&nbsp;
                              <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                              </span>
                          </td>
                  </tr>
          </tbody></table>
      </div>
  
  </div>

<div class="u-cb spcr"></div>
      <div>
  </div>
</form>

 </div>


<!-- The attribute(value) of UseScriptTag is null. --></div>
</div>
</div>`);
     $('#vi_zoom_trigger_mask16').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[15].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[15].nombre}" mskuskip="false">`);
     $('#SummaryPanel16').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
     <div class="vi-swc-lsp">
             <div style="" class="">
     <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[15].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                         <a class="it-sttl" data-mtdes="Demarini wtdxcds 34 2.0 Corndog Asa/usssa Softbol bate de madera de arce'&quot; ." data-mtsrclang="es-CO" href="#" onclick="return false;">
                         mostrar título original</a>
                         </span>
                         </h1><!--[if IE 7]>
         <div id="vi-itt-filler"></div>
         <![endif]-->
         <h2 id="subTitle" class="it-sttl">
             <span data-mtdes="Ships fast! See our feedback!" data-mtsrclang="es-CO"></span>
                             </h2>	
                             <div class="vi-hdops-two-clmn-fix">			
 <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                 </div>
         <span id="vi-lkhdr-itmTitl" class="u-dspn">Demarini wtdxcds 34" 2.0 Corndog Asa/usssa Softbol bate de madera de arce</span>
</div>
     <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">

 <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
 <form action="" method="post" name="viactiondetails">
     <div class="c-std vi-ds3cont-box-marpad ">
  <div class="nonActPanel ">
  <div>
<div class="u-flL lable">
  Estado:</div>
<div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[15].estado}</div>
  </div>

<!-- offscreen timer widget -->
      <!-- some comment -->
      <!-- volume pricing -->
              <div class="u-cb spcr"></div>
                              <div>
<div class="vi-tiers u-flL">
     
      </div>
</div><!-- volume pricing ends -->
          <div class="u-cb spcr "></div>
<div class="">
<div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
<div>		
  <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
      <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
          <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
      </div>
      
      <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
      
      <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
                  <span id="qtySubTxt">
                          <span class="">
                             Existencias limitadas </span>
                      </span>
                  <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
          <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
      <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">22 vendidos</a></span>
  </span>
          
      
      <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
      <!-- generating Id's array -->
      <div class="u-dspn"> 
          <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
          <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
          <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
          <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
          <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
          <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
          <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
      </div>
  </div>
</div>
<div class="u-cb spcr"></div>
</div>
</div>
  <div class="actPanel ">	
  <div id="vi-orgPrc-container" style=" display:block; ">
  <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
  <div class="u-cb  vi-VR-prcTmt-hide">
      <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
Precio de venta:</div><span id="orgPrc" class="notranslate ms-orp">
${res[15].precio}</span>
              <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                  <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                      <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                      <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                  </div>
              </div>
</div>
</div>
<div id="vi-youSaveSTP-container" style=" display:block; ">
  <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
  <div class="u-cb ms-as-rw vi-VR-prcTmt-hide">
      <div class="u-flL lable" id="youSaveSTP-lbl" style="">
Ahorras:</div><span id="youSaveSTP" class="notranslate ms-as">
              USD20.00 (12%&nbsp;de descuento)</span>
</div>
  </div>
<div class="u-cb spcr  vi-bbox-spcr15 "></div>

          <div class="u-cb">
              <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl">Ahora:</div>
                  <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">
      
<span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">${res[15].precioActual}</span>
<div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">Envío gratuito</div>
  <span itemprop="availability" content="https://schema.org/InStock"></span>
<span itemprop="priceCurrency" content="USD"></span>
<!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
<!-- Vat Excluded message -->
</div>
<!-- inserting code for another button -->
                  <!-- code ends  -->
                  <div class="u-flL">
                      <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white;" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
                      ¡Cómpralo ahora!<span class="clipped"> - </span>
                      </a>
                  <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                  <div id="streamline-bin-layer-content">
                          <div id="sbin-image-content">
                                  <img id="sbin-image" src="" alt="Demarini wtdxcds 34 2.0 Corndog Asa/usssa Softbol bate de madera de arce">
                          </div>
                          <div id="sbin-text-content">
                                  <p class="sbin-title">Demarini wtdxcds 34" 2.0 Corndog Asa/usssa Softbol bate de madera de arce</p>
                          </div>
                  </div>

                  <div style="clear:both"></div>

                  <div id="sbin-buttons">
                          <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                          <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                  </div>
          </div>

  </div>
</div>
              </div>	
          
          <div class="u-cb spcr vi-bbox-spcr10"></div>
  <div class="u-cb  ">
          <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
          <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
          <span>
                      <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                      Agregar al carro de compras<span class="clipped"> - </span>
                      </a>
                  </span>
                  </div>
      <div class="u-cb spcr"></div>
      </div>

<div class="watchListCmp ">
<div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
<div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
  <div class=" u-flL ">
              <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
  <a i="-99" n="Watch list" href="">
      <span class="vi-atw-icn"></span>
      <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
      <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
  </a>
</div>

<div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
  <span class="vi-atw-full-lnk">
      <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
  </span>
</div>

</div>


          <div class="vi-bbox-dspn u-cb spcr"></div>
          </div><div id="why2buy"><div class="w2b w2bsls">
  <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">100% de satisfaccion del comprador</span></div>
          <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Entrega gratis en 3 días</span></div>
          <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">22 vendido(s)</span></div>
          </div>
</div></div>
  <div id="vi-lkhdr-v4-plchdr"></div>
      <div id="vi-spw-atf">
                      </div>
              <div id="shippingSummary"><div class="u-cb spcr"></div>
              <div class="u-cb spcr"></div>
<div>
<div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
<div class="u-flL sh-col">
<span id="shSummary">
  <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                      <span>GRATIS</span>
                              </span>                            
          <span id="fShippingSvc">
          Envio rapido
                  </span>
  <span aria-hidden="true"> | </span>
  <span>
      <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
  </span>	

          <div id="sh-not-mayBe" style="display:none"></div>
</span>
<!-- Build Estimated delivery and CBT message -->
</div>
<div class="clear"></div>
</div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
              <div class="u-flL iti-w75 ">
                  <div class="iti-eu-txt iti-spacing">
<div class="iti-eu-label vi-u-flL" id="" style="">
Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
      <span itemprop="availableAtOrFrom"> Danbury, Connecticut, Estados Unidos
     </span>
  </div>
  <div class="clear"></div>
</div>
</div>
              <div class="u-cb"></div>
          </div><div class="u-cb"></div>
  <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
              <div class="u-flL iti-w75">
                  <div id="shipsToSummary">
<div class="iti-eu-txt iti-spacing">
  <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
  <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
      <span itemprop="areaServed">
         todo el mundo <span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                 <span class="hideForAcc">&nbsp;|&nbsp;</span>
                          <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                      </span>			
                  </span>
  </div>
</div>
</div>
</div>
          </div><div id="hideDelSec" style="">
  <div id="deliverySummary"><div class="u-cb spcr"></div>
              <div id="impchSummary" style="display: none;">
<div class="u-flL lable">Costos de importación:</div>
<div class="u-flL sh-col">
  <div>
      <span id="impch_show" style="display: none;">
          <span id="impchCost" class="sh-impchCost"></span>		
             (cantidad confirmada al completar la transacción) </span>					
      <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
      <span class="sh-bubble">
          <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
      </span>
      <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                 <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                 <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
              </div>
      </div>
</div>
  <div>No se cobran cargos de importación adicionales</div>
  </div>
<div class="u-cb spcr"></div>
</div><div class="u-flL lable">Entrega:</div>
<div class="u-flL sh-col">
<span id="delSummary">
      <!-- First shipping service's cost -->
  <!-- PC 5555 cases -->
          <!-- sea changes -->
<div class="sh-grn-top"></div>
<div style="float:left">
  Entrega prevista el o antes del <strong class="vi-acc-del-range"><b>jue. 25 abr. </b></strong><span class="sh-bubble" style="padding-left: 5px;">
      <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
  </span>
</div>	
<div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
          Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
</div>
<div class="sh-grn-btm"></div>
</span>
</div>
</div></div>
  <div class="u-cb spcr"></div>
      <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
Pagos:</div><div class="u-flL rpColWid">
<div id="payDet1" class="">
      <div>
<img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
      </div>
</div>
  <div class="pd-showGspLegal">
  </div>
</div><div class="u-cb spcr"></div>
      <div id="ret-accept">
      <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
      <div class="u-flL rpColWid">
              <table width="100%">
                  <tbody><tr>
                      <td class="rpWrapCol">
                          <span style="">
                              <span id="vi-ret-accrd-txt">
                                 30 día devoluciones. El comprador paga por la devolución del artículo</span>
                                     |&nbsp;
                              <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                              </span>
                          </td>
                  </tr>
          </tbody></table>
      </div>
  
  </div>

<div class="u-cb spcr"></div>
      <div>
  </div>
</form>

 </div>


<!-- The attribute(value) of UseScriptTag is null. --></div>
</div>
</div>`);
     $('#vi_zoom_trigger_mask17').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[16].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[16].nombre}" mskuskip="false">`);
     $('#SummaryPanel17').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
     <div class="vi-swc-lsp">
             <div style="" class="">
     <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[16].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                         <a class="it-sttl" data-mtdes="BCP 10in Tamaño Queen colchón de espuma'&quot; , de memoria de dos capas" data-mtsrclang="es-CO" href="#" onclick="return false;">
                         mostrar título original</a>
                         </span>
                         </h1><!--[if IE 7]>
         <div id="vi-itt-filler"></div>
         <![endif]-->
         <h2 id="subTitle" class="it-sttl">
             <span data-mtdes="Ships fast! See our feedback!" data-mtsrclang="es-CO"></span>
                             </h2>	
                             <div class="vi-hdops-two-clmn-fix">			
 <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                 </div>
         <span id="vi-lkhdr-itmTitl" class="u-dspn">BCP 10in Tamaño Queen colchón de espuma de memoria de dos capas</span>
</div>
     <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">

 <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
 <form action="" method="post" name="viactiondetails">
     <div class="c-std vi-ds3cont-box-marpad ">
  <div class="nonActPanel ">
  <div>
<div class="u-flL lable">
  Estado:</div>
<div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[16].estado}</div>
  </div>

<!-- offscreen timer widget -->
      <!-- some comment -->
      <!-- volume pricing -->
              <div class="u-cb spcr"></div>
                              <div>
<div class="vi-tiers u-flL">
     
      </div>
</div><!-- volume pricing ends -->
          <div class="u-cb spcr "></div>
<div class="">
<div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
<div>		
  <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
      <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
          <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
      </div>
      
      <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
      
      <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
                  <span id="qtySubTxt">
                          <span class="">
                          Existencias limitadas</span>
                      </span>
                  <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
          <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
      <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">16 vendidos</a></span>
  </span>
          
      
      <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
      <!-- generating Id's array -->
      <div class="u-dspn"> 
          <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
          <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
          <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
          <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
          <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
          <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
          <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
      </div>
  </div>
</div>
<div class="u-cb spcr"></div>
</div>
</div>
  <div class="actPanel ">	
  <div id="vi-orgPrc-container" style=" display:block; ">
  <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
  <div class="u-cb  vi-VR-prcTmt-hide">
      <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
Precio de venta:</div><span id="orgPrc" class="notranslate ms-orp">
${res[16].precio}</span>
              <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                  <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                      <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                      <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                  </div>
              </div>
</div>
</div>
<div id="vi-youSaveSTP-container" style=" display:block; ">
  <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
  <div class="u-cb ms-as-rw vi-VR-prcTmt-hide">
      <div class="u-flL lable" id="youSaveSTP-lbl" style="">
Ahorras:</div><span id="youSaveSTP" class="notranslate ms-as">
              USD211.00 (49%&nbsp;de descuento)</span>
</div>
  </div>
<div class="u-cb spcr  vi-bbox-spcr15 "></div>

          <div class="u-cb">
              <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl">Ahora:</div>
                  <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">
      
<span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">${res[16].precioActual}</span>
<div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">Envío gratuito</div>
  <span itemprop="availability" content="https://schema.org/InStock"></span>
<span itemprop="priceCurrency" content="USD"></span>
<!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
<!-- Vat Excluded message -->
</div>
<!-- inserting code for another button -->
                  <!-- code ends  -->
                  <div class="u-flL">
                      <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white;" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html" vib="vib" rel="nofollow" "="">
                      ¡Cómpralo ahora!<span class="clipped"> - </span>
                      </a>
                  <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                  <div id="streamline-bin-layer-content">
                          <div id="sbin-image-content">
                                  <img id="sbin-image" src="" alt="BCP 10in Tamaño Queen colchón de espuma de memoria de dos capas">
                          </div>
                          <div id="sbin-text-content">
                                  <p class="sbin-title">BCP 10in Tamaño Queen colchón de espuma de memoria de dos capas</p>
                          </div>
                  </div>

                  <div style="clear:both"></div>

                  <div id="sbin-buttons">
                          <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                          <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                  </div>
          </div>

  </div>
</div>
              </div>	
          
          <div class="u-cb spcr vi-bbox-spcr10"></div>
  <div class="u-cb  ">
          <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
          <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
          <span>
                      <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                      Agregar al carro de compras<span class="clipped"> - </span>
                      </a>
                  </span>
                  </div>
      <div class="u-cb spcr"></div>
      </div>

<div class="watchListCmp ">
<div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
<div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
  <div class=" u-flL ">
              <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
  <a i="-99" n="Watch list" href="">
      <span class="vi-atw-icn"></span>
      <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
      <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
  </a>
</div>

<div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
  <span class="vi-atw-full-lnk">
      <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
  </span>
</div>

</div>


          <div class="vi-bbox-dspn u-cb spcr"></div>
          </div><div id="why2buy"><div class="w2b w2bsls">
  <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">100% de satisfaccion del comprador</span></div>
          <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Entrga gratis en 4 dias</span></div>
          <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">60 dias para devoluciones</span></div>
          </div>
</div></div>
  <div id="vi-lkhdr-v4-plchdr"></div>
      <div id="vi-spw-atf">
                      </div>
              <div id="shippingSummary"><div class="u-cb spcr"></div>
              <div class="u-cb spcr"></div>
<div>
<div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
<div class="u-flL sh-col">
<span id="shSummary">
  <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                      <span>GRATIS</span>
                              </span>                            
          <span id="fShippingSvc">
          Standard Shipping<!-- GSP -->
                  </span>
  <span aria-hidden="true"> | </span>
  <span>
      <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
  </span>	

          <div id="sh-not-mayBe" style="display:none"></div>
</span>
<!-- Build Estimated delivery and CBT message -->
</div>
<div class="clear"></div>
</div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
              <div class="u-flL iti-w75 ">
                  <div class="iti-eu-txt iti-spacing">
<div class="iti-eu-label vi-u-flL" id="" style="">
Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
      <span itemprop="availableAtOrFrom"> Ontario, California, Estados Unidos
     </span>
  </div>
  <div class="clear"></div>
</div>
</div>
              <div class="u-cb"></div>
          </div><div class="u-cb"></div>
  <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
              <div class="u-flL iti-w75">
                  <div id="shipsToSummary">
<div class="iti-eu-txt iti-spacing">
  <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
  <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
      <span itemprop="areaServed">
         Estados Unidos y muchos otros países <span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                 <span class="hideForAcc">&nbsp;|&nbsp;</span>
                          <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                      </span>			
                  </span>
  </div>
</div>
</div>
</div>
          </div><div id="hideDelSec" style="">
  <div id="deliverySummary"><div class="u-cb spcr"></div>
              <div id="impchSummary" style="display: none;">
<div class="u-flL lable">Costos de importación:</div>
<div class="u-flL sh-col">
  <div>
      <span id="impch_show" style="display: none;">
          <span id="impchCost" class="sh-impchCost"></span>		
             (cantidad confirmada al completar la transacción) </span>					
      <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
      <span class="sh-bubble">
          <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
      </span>
      <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                 <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                 <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
              </div>
      </div>
</div>
  <div>No se cobran cargos de importación adicionales</div>
  </div>
<div class="u-cb spcr"></div>
</div><div class="u-flL lable">Entrega:</div>
<div class="u-flL sh-col">
<span id="delSummary">
      <!-- First shipping service's cost -->
  <!-- PC 5555 cases -->
          <!-- sea changes -->
<div class="sh-grn-top"></div>
<div style="float:left">
  Entrega prevista el o antes del <strong class="vi-acc-del-range"><b>vie. 26 abr.  </b></strong><span class="sh-bubble" style="padding-left: 5px;">
      <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
  </span>
</div>	
<div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
          Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
</div>
<div class="sh-grn-btm"></div>
</span>
</div>
</div></div>
  <div class="u-cb spcr"></div>
      <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
Pagos:</div><div class="u-flL rpColWid">
<div id="payDet1" class="">
      <div>
<img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
      </div>
</div>
  <div class="pd-showGspLegal">
  </div>
</div><div class="u-cb spcr"></div>
      <div id="ret-accept">
      <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
      <div class="u-flL rpColWid">
              <table width="100%">
                  <tbody><tr>
                      <td class="rpWrapCol">
                          <span style="">
                              <span id="vi-ret-accrd-txt">60 día devoluciones. El comprador paga por la devolución del artículo </span>
                              
                                     |&nbsp;
                              <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                              </span>
                          </td>
                  </tr>
          </tbody></table>
      </div>
  
  </div>

<div class="u-cb spcr"></div>
      <div>
  </div>
</form>

 </div>


<!-- The attribute(value) of UseScriptTag is null. --></div>
</div>
</div>`);

     $('#vi_zoom_trigger_mask18').append(`<img id="icImg" class="img img500" itemprop="image" src="${res[17].imagen}" style="" onload="picTimer=new Date().getTime();" clk="0" alt="${res[17].nombre}" mskuskip="false">`);
     $('#SummaryPanel18').append(`<div id="LeftSummaryPanel" class="lsp-c  lsP2C lsp-de">
     <div class="vi-swc-lsp">
             <div style="" class="">
     <h1 class="it-ttl" itemprop="name" id="itemTitle"><span class="g-hdn">Detalles acerca de  &nbsp;</span>${res[17].nombre}<span style="white-space: nowrap;"><span class="it-icon-pd">-</span>
                         <a class="it-sttl" data-mtdes="Nuevo ecobee 3 Lite Smart TERMOSTATO 2nd generación &quot; con 2 sensores de habitación" data-mtsrclang="es-CO" href="#" onclick="return false;">
                         mostrar título original</a>
                         </span>
                         </h1>
     <!-- DO NOT change linkToTagId="rwid" as the catalog response has this ID set  -->
     <div class="vi-hdops-two-clmn-fix">			
         <div style="" class="vi-notify-new-bg-wrapper">
                 <div class="vi-notify-new-bg-dTop" style=""> </div>
                 <div id="vi_notification_new" class="vi-notify-new-bg-dBtm" style="top: -28px;">
                 </div>
             </div>
         </div>		
     </div>
 <div class="it-rlBr it-rlBrd  it-rlBr500 ">
                 </div>
         <span id="vi-lkhdr-itmTitl" class="u-dspn">Nuevo ecobee 3 Lite Smart TERMOSTATO 2nd generación con 2 sensores de habitación</span>
</div>
     <div id="mainContent" role="main" tabindex="-1" aria-labelledby="itemInfoLabel" class="is is2C" style="overflow:hidden;" itemprop="offers" itemscope="" itemtype="https://schema.org/Offer">

 <h2 id="itemInfoLabel" class="g-hdn">Información del artículo</h2>
 <form action="" method="post" name="viactiondetails">
     <div class="c-std vi-ds3cont-box-marpad ">
  <div class="nonActPanel ">
  <div>
<div class="u-flL lable">
  Estado:</div>
<div class="u-flL condText  " id="vi-itm-cond" itemprop="itemCondition">${res[17].estado}</div>
  </div>

<!-- offscreen timer widget -->
      <!-- some comment -->
      <!-- volume pricing -->
              <div class="u-cb spcr"></div>
             
          <div class="u-cb spcr "></div>
<div class="">
<div class="u-flL lable quantity"><label for="qtyTextBox">Cantidad:</label></div>
<div>		
  <div class="u-flL qtyCntVal vi-bboxrev-posabs vi-bboxrev-dsplinline ">
      <div id="w1-12-_errIcon" class="errorIcon" style="display: none;"><!-- err_qty_icon -->
          <img src="https://ir.ebaystatic.com/pictures/aw/pics/s.gif" class="errorimg" alt="Error icon">
      </div>
      
      <input class="qtyInput" type="text" aria-describedby="w1-12-_errMsg" autocomplete="off" size="4" value="1" name="quantity" id="qtyTextBox" isvalid="true">
      
      <span class="qtyTxt vi-bboxrev-dsplblk vi-newVpQtyCls2Col vi-qty-fixAlignment feedbackON" style="">
                  <span id="qtySubTxt">
                          <span class="">
                          Existencias limitadas</span>
                      </span>
                  <span class="vi-qty-vert-algn vi-qty-slash"> / </span>
          <span class="vi-qtyS-hot-red  vi-bboxrev-dsplblk vi-qty-vert-algn vi-qty-pur-lnk">
      <a href="https://offer.ebay.com/ws/eBayISAPI.dll?ViewBidsLogin&amp;item=292919641189&amp;rt=nc&amp;_trksid=p2047675.l2564">1 vendido</a></span>
  </span>
          
      
      <div id="qtyErrMsg" aria-live="polite" role="status"><div id="w1-12-_errMsg" class="u-cb err" style="display: none;"> </div></div>
      <!-- generating Id's array -->
      <div class="u-dspn"> 
          <b id="w1-12_qtyErr_0">Ingresa una cantidad de $qty_dummy$ o menos</b>
          <b id="w1-12_qtyErr_1">Ingresa una cantidad de 1</b>
          <b id="w1-12_qtyErr_2">Las compras están limitadas a $qty_dummy$ por comprador</b>
          <b id="w1-12_qtyErr_3">Ingresa una cantidad de 1 o más</b>
          <b id="w1-12_qtyErr_4">Ingresa un número menor</b>
          <b id="w1-12_qtyErr_5">Selecciona una cantidad inferior a $qty_dummy1$o igual a $qty_dummy$</b>
          <b id="w1-12_qtyErr_6">Solo puedes seleccionar una cantidad igual a $qty_dummy$</b>
      </div>
  </div>
</div>
<div class="u-cb spcr"></div>
</div>
</div>
  <div class="actPanel ">	
  <div id="vi-orgPrc-container" style=" display:block; ">
  <div class="u-cb spcr  vi-VR-prcTmt-hide"></div>
  <div class="u-cb  vi-VR-prcTmt-hide">
      <div class="vi-bbox-dspn u-flL lable" id="orgPrc-lbl" style="">
Precio:</div><span id="orgPrc" class="notranslate ms-orp">
${res[17].precio}</span>
              <a href="javascript:;" id="e1"><img class="ms-hlp" src="https://ir.ebaystatic.com/pictures/aw/pics/icons/iconBubbleHelp.gif" alt="¿Qué significa este precio?"></a>
                  <div class="oly_upnl" id="w1-14-overlay"><div class="ms-olp">
                      <div class="ms-olp-ttl">¿Qué significa este precio?</div>
                      <div class="ms-olp-cnt">Precio de venta reciente facilitado por el vendedor</div>
                  </div>
              </div>
</div>
</div>
<div id="vi-youSaveSTP-container" style=" display:block; ">
  <div class="u-cb spcr   vi-VR-prcTmt-hide"></div>
  </div>
<div class="u-cb spcr  vi-bbox-spcr15 "></div>
<div class="u-cb">
 <div class="vi-bbox-dspn u-flL lable binLable" id="prcIsum-lbl"></div>
     <div id="vi-mskumap-none" style="" class="u-flL w29 vi-price ">

<span class="notranslate" id="prcIsum" itemprop="price" style="" content="89.0">      </span>
<div id="isum-shipCostDiv" class=" sh-CostBB" style="display: none;">      </div>
<span itemprop="availability" content="https://schema.org/InStock"></span>
<span itemprop="priceCurrency" content="USD"></span>
<!--Added for VAT message - DE site. Show VAT included msg just below the price. Converted price message should come after this message.-->
<!-- Vat Excluded message -->
</div>
                  <div class="u-flL">
                      <a role="button" _sp="p2047675.l1356" id="binBtn_btn" style="color: white; margin-left: 199px" class="btn btn-prim  vi-VR-btnWdth-XL " href="../Formularios-ebay/informacion-de-contacto.html"  vib="vib" rel="nofollow" "="">
                      ¡Cómpralo ahora!<span class="clipped"> - </span>
                      </a>
                  <div class="oly_upnl" id="streamLineBinOly"><div id="streamline-bin-layer">
                  <div id="streamline-bin-layer-content">
                          <div id="sbin-image-content">
                                  <img id="sbin-image" src="" alt="Nuevo ecobee 3 Lite Smart TERMOSTATO 2nd generación con 2 sensores de habitación">
                          </div>
                          <div id="sbin-text-content">
                                  <p class="sbin-title">Nuevo ecobee 3 Lite Smart TERMOSTATO 2nd generación con 2 sensores de habitación</p>
                          </div>
                  </div>

                  <div style="clear:both"></div>

                  <div id="sbin-buttons">
                          <button id="sbin-signin-btn" type="button">Inicia sesión para ver más</button>
                          <button id="sbin-gxo-btn" type="button">Completar la compra como usuario invitado</button>
                  </div>
          </div>

  </div>
</div>
              </div>	
          
          <div class="u-cb spcr vi-bbox-spcr10"></div>
  <div class="u-cb  ">
          <div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
          <div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
          <span>
                      <a role="button" _sp="p2047675.l1473" id="isCartBtn_btn" style=" box-sizing: border-box;color: white;	font-size: small;" class="btn btn-scnd  vi-VR-btnWdth-XL " href="" onclick="carritocompras()" vib="vib" rel="nofollow" "="">
                      Agregar al carro de compras<span class="clipped"> - </span>
                      </a>
                  </span>
                  </div>
      <div class="u-cb spcr"></div>
      </div>

<div class="watchListCmp ">
<div class="vi-bbox-dspn u-flL lable">&nbsp;</div>
<div class="vi-bbox-dspn u-flL w29">&nbsp;</div>
  <div class=" u-flL ">
              <div id="vi-atl-lnk" class="vi-atw-btm-lnk " style="">		
  <a i="-99" n="Watch list" href="">
      <span class="vi-atw-icn"></span>
      <span class="vi-atw-txt">Agregar a Lista de favoritos</span>
      <span class="vi-rmw-txt">Eliminar de Lista de favoritos</span>
  </a>
</div>

<div id="vi-atw-full" class="vi-atw-btm-lnk " style="display:none;">
  <span class="vi-atw-full-lnk">
      <span class="vi-atw-icn"></span><span class="vi-atw-txt">La Lista de favoritos está llena</span>
  </span>
</div>

</div>


          <div class="vi-bbox-dspn u-cb spcr"></div>
          </div><div id="why2buy"><div class="w2b w2bsls">
  <div class="w2b-cnt w2b-3 w2b-red"><span style="color: #dd1e31" class="w2b-sgl">Entrega gratis en 3 días</span></div>
          <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">30 días para devoluciones</span></div>
          <div class="w2b-cnt w2b-3 w2b-brdr"><span style="color: black" class="w2b-sgl">Realiza envíos desde Estados Unidos</span></div>
          </div>
</div></div>
  <div id="vi-lkhdr-v4-plchdr"></div>
      <div id="vi-spw-atf">
                      </div>
              <div id="shippingSummary"><div class="u-cb spcr"></div>
              <div class="u-cb spcr"></div>
<div>
<div class="u-flL lable" id="shippingPlaceHolderId">Envío:</div>
<div class="u-flL sh-col">
<span id="shSummary">
  <span id="fshippingCost" class="notranslate sh-fr-cst ">
                                      <span>
                                         GRATIS </span>
                              </span> 
                              <span id="fShippingSvc">
                                 Standard Shipping   
                                         </span>
  <span aria-hidden="true"> | </span>
  <span>
      <a id="e3" href="#shpCntId" aria-describedby="shippingPlaceHolderId" class="vi-ds3-ter-a si-pd sh-nwr"> Ver detalles </a>
  </span>	

          <div id="sh-not-mayBe" style="display:none"></div>
</span>
<!-- Build Estimated delivery and CBT message -->
</div>
<div class="clear"></div>
</div></div><div id="itemLocation"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
              <div class="u-flL iti-w75 ">
                  <div class="iti-eu-txt iti-spacing">
<div class="iti-eu-label vi-u-flL" id="" style="">
Ubicación del artículo:</div><div class="iti-eu-bld-gry ">
      <span itemprop="availableAtOrFrom"> Fort Worth, Texas, Estados Unidos
     </span>
  </div>
  <div class="clear"></div>
</div>
</div>
              <div class="u-cb"></div>
          </div><div class="u-cb"></div>
  <div id="shipsTo"><div class="lable u-flL vi-acc-hide">&nbsp;</div>
              <div class="u-flL iti-w75">
                  <div id="shipsToSummary">
<div class="iti-eu-txt iti-spacing">
  <div id="vi-acc-shpsToLbl" class="iti-eu-label vi-u-flL">Realiza envíos a: </div>
  <div id="vi-acc-shpsToLbl-cnt" class="iti-eu-bld-gry vi-shp-pdg-rt">
      <span itemprop="areaServed">
      todo el mundo<span class="sh-nwr" style="font-weight: normal;padding-left:5px;">
                                                                 <span class="hideForAcc">&nbsp;|&nbsp;</span>
                          <a aria-label="Ver exclusiones en envíos" id="e6" href="#shpCntId" class="vi-ds3-ter-a">Ver exclusiones</a>
                      </span>			
                  </span>
  </div>
</div>
</div>
</div>
          </div><div id="hideDelSec" style="">
  <div id="deliverySummary"><div class="u-cb spcr"></div>
              <div id="impchSummary" style="display: none;">
<div class="u-flL lable">Costos de importación:</div>
<div class="u-flL sh-col">
  <div>
      <span id="impch_show" style="display: none;">
          <span id="impchCost" class="sh-impchCost"></span>		
             (cantidad confirmada al completar la transacción) </span>					
      <span id="impch_xo" style="">Se proporcionará al completar la transacción </span>
      <span class="sh-bubble">
          <a id="imprthlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda de Costos de envío (abre una ventana)</b></a>
      </span>
      <div class="oly_upnl" id="imprtoly"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
                 <span id="vi-sh-imp-nonEU" style="">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
                 <span id="vi-sh-imp-EU" style="display:none">Este monto incluye aranceles, impuestos, corretaje y otras tarifas aplicables. Este monto está sujeto a cambios hasta que efectúes el pago. Si resides en un país miembro de la Unión Europea aparte del Reino Unido, los impuestos de importación de esta compra no se pueden recuperar. Para obtener información adicional, consulta los <a href="https://pages.ebay.com/shipping/globalshipping/buyer-tnc.html#programfees" target="_blank">términos y condiciones<b class="hideforacc">del Programa de envíos globales</b></a> (se abre en una nueva ventana o pestaña)</span>
              </div>
      </div>
</div>
  <div>No se cobran cargos de importación adicionales</div>
  </div>
<div class="u-cb spcr"></div>
</div><div class="u-flL lable">Entrega:</div>
<div class="u-flL sh-col">
<span id="delSummary">
      <!-- First shipping service's cost -->
  <!-- PC 5555 cases -->
          <!-- sea changes -->
<div class="sh-grn-top"></div>
<div style="float:left">
Previsto entre el <strong class="vi-acc-del-range"><b> jue. 25 abr.</b></strong><span class="sh-bubble" style="padding-left: 5px;">
      <a id="hldhlp" class="sh-qmark" href="javascript:;">&nbsp;<b class="g-hdn">icono de ayuda para Fecha de entrega prevista (se abre una ventana)</b></a>
  </span>
</div>	
<div class="oly_upnl" id="w1-22-overlay"><div class="vi-shp-shpolay" aria-live="assertive" role="alert">
          Calculamos el plazo de entrega con un método patentado que combina diversos factores, como la proximidad del comprador a la ubicación del artículo, el servicio de envío seleccionado, el historial de envíos del vendedor y otros datos. Los plazos de entrega pueden variar, especialmente en épocas de mucha actividad. </div>
</div>
<div class="sh-grn-btm"></div>
</span>
</div>
</div></div>
  <div class="u-cb spcr"></div>
      <div class="u-flL lable  vi-payv2-payText" id="paymentsPlaceHolderId" style="">
Pagos:</div><div class="u-flL rpColWid">
<div id="payDet1" class="">
      <div>
<img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-paypal" alt="PayPal" title="PayPal">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-visa" alt="Visa" title="Visa">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-master_card" alt="Tarjeta Master" title="Tarjeta Master">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-am_ex" alt="Amex" title="Amex">
      <img src="https://ir.ebaystatic.com/cr/v/c1/s_1x2.png" class="vi-pv2-discover" alt="Discover" title="Discover">
      </div>
</div>
  <div class="pd-showGspLegal">
      <div class="u-dspn">
          </div>
  </div>
</div><div class="u-cb spcr"></div>
      <div id="ret-accept">
      <div id="returnsPlacementHolderId" class="u-flL lable">Devoluciones:</div>
      <div class="u-flL rpColWid">
              <table width="100%">
                  <tbody><tr>
                      <td class="rpWrapCol">
                          <span style="">
                              <span id="vi-ret-accrd-txt">
                                 30 días para devoluciones gratuitas </span>
                                     |&nbsp;
                              <a rel="nofollow"></a><a aria-describedby="returnsPlacementHolderId" href="#rpdCntId" class="vi-ds3-ter-a si-pd u-nowrap" id="e7"> Ver detalles </a>
                              </span>
                          </td>
                  </tr>
          </tbody></table>
      </div>
  
  </div>

<div class="u-cb spcr"></div>
      <div>
  </div>
</form>
 </div>
</div>`);
        },
        error:function(error){
            console.log(error);
        }
    });
});