document.addEventListener("DOMContentLoaded", function () {
  // Contenido del libro - Información de Cerámicas Ulises
  const bookContent = [
    {
      title: "Introducción",
      content: `
              <div class="book-section">
                  <h3>¡Bienvenido/a a Cerámicas Ulises!👋</h3>
                  <p>En esta aplicación web, podras explorar, conocer y adquirir una hermosa selección de productos creeados a mano por nuestros hermanos Artesanos, como tazas, platos, figuras de resina, piezas de barro, alcancías y mucho más.</p><br>
                  <p>Y como nos gusta siempre aclarar cualquier duda de nuestros apreciados clientes, te presentamos este manual que te guiará a través de las funciones principales de nuestro Sitio Web para que puedas navegar, seleccionar tus productos favoritos y aprovechar nuestros descuentos especiales por Mayoreo.</p>
                  <div class="book-highlight">
                      <p>⚠️ Para navegar por las páginas, usa los botones de navegación (◀️❌▶️) para continuar leyendo.</p>
                  </div>
              </div>
          `,
      image: "img/por.png",
      notes: "Manual de usuario - Versión 1.0",
    },
    {
      title: "Índice",
      content: `
          <div class="book-section">
              <h3 class="index-title">Contenido</h3>
              
              <div class="index-container">
                  <div class="index-item">
                      <span class="index-text">Introducción</span>
                      <span class="index-dots"></span>
                      <span class="index-page">1</span>
                  </div>
                  
                  <div class="index-item">
                      <span class="index-text">Acceso a la Aplicación</span>
                      <span class="index-dots"></span>
                      <span class="index-page">2</span>
                  </div>
                  
                  <div class="index-item">
                      <span class="index-text">Pantalla Principal y Navegación</span>
                      <span class="index-dots"></span>
                      <span class="index-page">3</span>
                  </div>
                  
                  <div class="index-item">
                      <span class="index-text">Navegación (continuación)</span>
                      <span class="index-dots"></span>
                      <span class="index-page">4</span>
                  </div>
                  
                  <div class="index-item">
                      <span class="index-text">Explorar y Seleccionar Productos</span>
                      <span class="index-dots"></span>
                      <span class="index-page">5</span>
                  </div>
                  
                  <div class="index-item">
                      <span class="index-text">Añadir Productos al Carrito</span>
                      <span class="index-dots"></span>
                      <span class="index-page">6</span>
                  </div>
                  
                  <div class="index-item">
                      <span class="index-text">Gestionar tu Carrito de Compras</span>
                      <span class="index-dots"></span>
                      <span class="index-page">7</span>
                  </div>
                  
                  <div class="index-item">
                      <span class="index-text">Descuento por Mayoreo</span>
                      <span class="index-dots"></span>
                      <span class="index-page">8</span>
                  </div>
                  
                  <div class="index-item">
                      <span class="index-text">Aclaración sobre Descuentos</span>
                      <span class="index-dots"></span>
                      <span class="index-page">9</span>
                  </div>
                  
                  <div class="index-item">
                      <span class="index-text">Finalizar la Compra (Checkout)</span>
                      <span class="index-dots"></span>
                      <span class="index-page">10</span>
                  </div>
                  
                  <div class="index-item">
                      <span class="index-text">Secciones Adicionales</span>
                      <span class="index-dots"></span>
                      <span class="index-page">11</span>
                  </div>
              </div>
              
              <div class="index-note">
                  <p>Haz clic en los botones de navegación para explorar el manual completo.</p>
              </div>
          </div>
      `,
      image: "img/intro.png",
      notes: "Índice completo del manual de usuario",
    },
    {
      title: "Acceso a la Aplicación",
      content: `
              <div class="book-section">
                  <p>Para usar Cerámicas Ulises, simplemente abre tu navegador web preferido (como Chrome, Firefox, Safari, etc.) y dirígete a la siguiente dirección:</p>
                  <div class="book-url">
                      https://ceramicasulices.navidev.org/
                  </div>
                  <center><img src="/img/1.png" width="201" height="132"
                    alt="Logo de Cerámica Uli"></center>
                  <p>Una de las ventajas de nuestro sitio web es que <strong>no necesitas instalar nada</strong>, ¡puedes empezar a explorar de inmediato!</p>
                  <div class="book-note">
                      <strong>Nota:</strong> La aplicación está optimizada para funcionar en cualquier dispositivo, ya sea computadora, tablet o teléfono móvil, si detectas algun error o falla comunicate con el equipo de soporte tecnico al correo electronico: soporteupn@ceramicasulices.navidev.org.
                  </div>
                  <center><img src="/img/celular.png" height="262" alt="Logo de Cerámica Uli"></center><br>
              </div>
          `,
      image: "/img/2.png",
      notes:
        "Compatible con todos los navegadores modernos he dispositivos electrónicos",
    },
    {
      title: "Pantalla Principal y Navegación",
      content: `
              <div class="book-section">
                  <p>Al ingresar a la aplicación, encontrarás una interfaz amigable con una barra de navegación principal que te permite acceder a las diferentes secciones:</p><br>
                  <ul class="book-list">
                      <li><strong>🏠Inicio:</strong> Te lleva de vuelta a la página principal, donde generalmente se muestran productos destacados, novedades o categorías principales como (Tazas,Platos,Alcancias,etc).</li>
                      <center><img src="img/3.png" width="241" height="132" alt="Logo de Cerámica Uli"></center><br>

                      <li><strong>📞Quejas:</strong> Una sección dedicada para que puedas enviar tus comentarios, sugerencias o reportar algún inconveniente, o si nos quieres dar algun comentario positivo tambien es muy apreciado.</li>
                      <center><img src="img/4.png" width="241" height="132" alt="Logo de Cerámica Uli"></center><br>

                      <li><strong>📍Nosotros:</strong> Aquí encontrarás más información sobre Cerámicas Ulises, nuestra ubicacion, todos los comentarios y calificaciones de nuestros usuarios</li>
                      <center><img src="img/5.png" width="241" height="132" alt="Logo de Cerámica Uli"></center><br>

                      <li><strong>👤Tú Perfil:</strong> Accede a la información de tu cuenta, donde si es tu primera vez en nuestro Sitio Web, 
                      es importante rellenar los datos faltantes que se te solicitaran en esta sección, con tal de poder saber si en un futuro
                      necesitas un envio a domicilio poder llegar a tu domicilio, solo se necesita rellenar una vez y se quedara guardado,
                      igual puedes editar informacion si te equivocaste o cambiaste de dirección o algun otro dato <strong>⚠️Importante</strong></li>
                      <center><img src="img/6.png" width="241" height="132" alt="Logo de Cerámica Uli"></center><br>

                      <li><strong>🛒Carrito:</strong> Muestra los productos que has seleccionado para comprar, y tambien puedes consultar los pedidos o productos que has hecho en nuestro sitio web.</li>
                      <center><img src="img/7.png" width="241" height="132" alt="Logo de Cerámica Uli"></center><br>
                  </ul>
              </div>
          `,
      image: "img/8.png",
      notes:
        "Para navegar, debes estar registrado en la pagina web primeramente, de lo contario no podras acceder a ningun lugar y solo podras ver los productos, y la sección de nosotros, lo demas si la pagina web detecta que no estas registrado te enviara al Login para iniciar o registarte en nuestro Sitio Web",
    },
    {
      title: "Navegación (continuación)",
      content: `
              <div class="book-section">
                  <p>Además de las secciones principales, también encontrarás:</p>
                  <ul class="book-list">
                      <li><strong>🤖Asistente:</strong> Aqui podras encontar un chat con una herramienta de Inteligencia Artificial de ayuda interactiva para responder tus preguntas frecuentes en tiempo real.</li>
                      <center>
                    <video width="261" height="152" controls> <source src="img/9.mp4" type="video/mp4">
                      Tu navegador no soporta la etiqueta de video.
                    </video></center><br>
                      <li><strong>📙Tutorial:</strong> Esta sección es donde estas actualmente ,que es nuestra guía paso a paso por las funciones más importantes de la aplicación, ideal para nuevos usuarios.</li>
                      <center>
                  <video width="261" height="152" controls> <source src="img/10.mp4" type="video/mp4">
                    Tu navegador no soporta la etiqueta de video.
                  </video></center><br>
                  </ul>
                  <div class="book-tip">
                      <strong>Consejo:</strong> Si es tu primera visita, te recomendamos comenzar con el Tutorial para familiarizarte con todas las funciones disponibles.
                  </div>
              </div>
          `,
      image: "img/11.png",
      notes:
        "El asistente virtual🤖, está disponible 24/7 para resolver tus dudas",
    },
    {
      title: "Explorar y Seleccionar Productos 🔎",
      content: `
              <div class="book-section">
                  <p>Puedes navegar por los productos desde la página de Inicio o utilizando los filtros de busqueda o categorías que se muestran en forma de botones como:</p>
                  <div class="book-categories">
                      <span>Tazas</span> • <span>Platos</span> • <span>Resina</span> • <span>Alcancias</span> • <span>Otros Productos</span>
                  </div>
                  <center><img src="/img/12.png" width="241" height="132" alt="Logo de Cerámica Uli"></center><br>
                  <p>Cada producto se muestra con su nombre ,una imagen del producto, precio por pieza y por docena.<br> <strong>Ejemplo: (1 x 20) y (12 x 200).</strong></p>
                  <br>
                  <center>
                  <video width="241" height="132" controls> <source src="img/13.mp4" type="video/mp4">
                    Tu navegador no soporta la etiqueta de video.
                  </video></center><br>

                  <h4>Para saber más sobre un producto --> En Computadora </h4>
                  <p>Como se ve en el video,si seleccionas el producto que desees o que te interese para poder ver más detalles, solo pon el mouse o raton encima de la imagen del producto que deseas conocer y esta se volteara y te mostrara los detalles más especificos en su parte trasera como:</p>
                  <ul class="book-list">
                      <li>Descripción completa</li>
                      <li>Dimensiones</li>
                      <li>Material</li>
                      <li>Etc</li>
                  </ul>
              </div>
          `,
      image: "img/13.png",
      notes:
        "Todas las imágenes de productos pueden voltearse para ver más detalles de este mismo",
    },
    {
      title: "Añadir Productos al Carrito",
      content: `
              <div class="book-section">
                  <p>Cuando estés en la página de los productos y ya estes convencid@ por uno y deseas comprar:</p>
                  <ol class="book-steps">
                      <li>Busca el botón llamado "Añadir al carrito" o "Pedir" o similar.</li>
                      <img src="/img/14.png" width="161" height="92"
                    alt="Logo de Cerámica Uli">
                    
                      <li>Esto lo enviara a otra pagina llamada Carrito ,donde se agregara su producto.</li>
                      <center><img src="/img/15.png" width="241" height="132" alt="Logo de Cerámica Uli"></center><br>
                      
                      <li>Aqui le aparecera un boton donde desplegara una lista de la cantidad que desee.</li>
                      <center><img src="/img/16.png" width="241" height="132" alt="Logo de Cerámica Uli"></center><br>

                      <li>Selecciona la cantidad deseada y después se mostrara el total del pedido que va a pagar en tiempo real.🟢🔴</li>
                      <center><img src="/img/17.png" width="241" height="132" alt="Logo de Cerámica Uli"></center><br>

                      <li>Nota (¡Importante!):<br>
                      Si usted selecciona más de 12 piezas se le aplicara un descuento.🔵</li>
                      <center>
                      <video width="241" height="132" controls> <source src="img/18.mp4" type="video/mp4">
                        Tu navegador no soporta la etiqueta de video.
                      </video></center><br>
                      <center><img src="/img/18.png" width="341" height="132" alt="Logo de Cerámica Uli"></center><br>

                      <li>>Puedes seguir navegando y añadiendo más productos a tu carrito antes de finalizar la compra.</li>
                      <li>>Para esto ,tienes un boton el cual dice "Segir Comprando" el cual lo enviara a la pagina principal 
                      para que siga explorando más productos, los productos que vaya seleccionando se iran guardando en su 
                      Carrito de compras hasta que Elimine el producto de su lista del carrito o Finalize el Pedido</li><br>
                      <center>
                      <video width="241" height="132" controls> <source src="img/18.mp4" type="video/mp4">
                        Tu navegador no soporta la etiqueta de video.
                      </video></center><br>
                      <center><img src="/img/19.png" width="241" height="132" alt="Logo de Cerámica Uli"></center><br>

                      <li>El carrito se actualizará indicando el total de artículos, por producto y el total a pagar.</li>
                  </ol>
                  <div class="book-highlight">
                      <p>Recuerda que puedes seguir navegando y añadiendo más productos a tu carrito antes de finalizar la compra.</p>
                  </div>
              </div>
          `,
      image: "img/20.png",
      notes:
        "Los productos permanecen en tu carrito incluso si cierras la página y vuelves más tarde.(IMPORTANTE!!!),Si agregas dos productos iguales y eliges uno con mas de 12 piezas y el otro con solo una,se te aplica el descuento para el que tiene mas de 12 piezas y el de una pieza te queda a precio normal. ",
    },
    {
      title: "Gestionar tu Carrito de Compras",
      content: `
              <div class="book-section">
                  <p>Una vez ya estes convencid@, de tus productos y deseas ya realizar el pedido:<br>
                  Haz clic en el icono o enlace "Carrito" en la barra de navegación para ver todos los productos que has seleccionado.</p>
                  <center><img src="/img/7.png" width="241" height="132" alt="Logo de Cerámica Uli"></center><br>

                  <p>Dentro del carrito, podrás:</p>
                  <ul class="book-list">
                      <li><strong>Ver el listado de productos:</strong> La cantidad de cada uno y el precio unitario.</li>
                      <li><strong>Ajustar la cantidad:</strong> Modifica el número de piezas de cada artículo.</li>
                      <li><strong>Eliminar productos:</strong> Quitar artículos que ya no desees.</li>
                      <center><img src="/img/21.png" width="241" height="132" alt="Logo de Cerámica Uli"></center><br>
                      <li>Ver el subtotal y el total estimado de tu compra.</li>
                  </ul><br>

                  <div class="book-highlight">
                      <p>Los cambios en tu carrito se guardan automáticamente.</p>
                  </div>
              </div>
          `,
      image: "img/16.png",
      notes:
        "Puedes modificar las cantidades directamente desde la página del carrito",
    },
    {
      title: "Descuento por Mayoreo (¡Importante!)",
      content: `
              <div class="book-section">
                  <div class="book-important">
                      <h3>¡Ahorra comprando más!</h3>
                  </div>
                  <p>Cerámicas Ulises te ofrece un descuento especial si compras en volumen:</p>
                  <ul class="book-list highlight">
                      <li><strong>Condición:</strong> El descuento se aplica automáticamente cuando agregas más de 12 piezas de un mismo producto específico a tu carrito.</li>
                      <li><strong>Cómo funciona:</strong> Si pides 13 o más tazas del mismo modelo, el precio por cada una de esas tazas disminuirá. El sistema recalculará el precio unitario para ese producto en específico y actualizará el subtotal en tu carrito.</li>
                  </ul>
                  
              </div>
          `,
      image: "img/18.png",
      notes:
        "Los descuentos se aplican automáticamente al alcanzar la cantidad mínima",
    },
    {
      title: "Aclaraciónes sobre Descuentos",
      content: `
              <div class="book-section">
                  <div class="book-example">
                      <h4>Ejemplo de aplicación del descuento:</h4>
                      <p><strong>Caso 1:</strong> Si llevas 10 tazas de un tipo y 5 platos de otro, no se aplica el descuento porque ningún producto individual supera las 12 unidades.</p>
                      <p><strong>Caso 2:</strong> Si llevas 15 tazas del mismo tipo, sí se aplica el descuento solo a esas tazas, porque superan las 12 unidades del mismo producto.</p>
                  </div>
                  <p>Este descuento se basa en la cantidad por producto individual, no en la cantidad total de artículos diferentes en tu carrito.</p>
                  <div class="book-tip">
                      <p>¡Aprovecha esta oportunidad para ahorrar en tus compras por volumen!</p>
                  </div>
              </div>
          `,
      image: "img/20.png",
      notes:
        "El sistema calcula automáticamente los mejores precios según tus cantidades",
    },
    {
      title: "Finalizar la Compra (Ultimo Paso)✅",
      content: `
              <div class="book-section">
                  <p>Una vez ya aclarado y que estés satisfech@ con los productos en tu carrito y hayas 
                  verificado las cantidades y precios (incluyendo los descuentos por mayoreo aplicados):</p>
                  <ol class="book-steps">
                      <li>Busca y haz clic en el botón "Hacer Pedido📦".</li>
                      <center><img src="/img/carrito.png" width="161" height="92"</center><br>

                      <li>Si deseas o quieres que el envio sea a tu domicilio, revisa o actualiza la informacion de tu perfil y ingresa o confirma tu dirección de envío, en esta seccion</li>
                      <center><img src="/img/22.png" width="161" height="92"</center><br>

                      <li>> Despues revisas tu Perfil, que tengas tu información correcta o que tengas datos aqui ,de lo contario has lo siguiente:</li>
                      <li> * Ve al boton de "Editar Perfil✏️"</li>
                      <center><img src="/img/23.png" width="161" height="92"</center><br>

                      <li> * Luego revisa que información vas a cambiar, Ve al boton de "Editar Perfil✅"</li>
                      <center><img src="/img/24.png" width="161" height="162"</center><br>

                      <li>Revisa bien tu informacion y despues de eso, presionas el boton "Actualizar Perfil✅".</li>
                      <li>Ya finalizado eso ya solo quedaria ahora si presionar el botón de "Hacer Pedido📦" y listo.</li>
                  </ol>
                  <div class="book-highlight">
                      <p>Puedes revisar los pedidos que has realizado en el boton de "Mis pedidos" ,donde se deplegara una tablita con todos tus pedidos realizados hasta hoy.</p>
                  </div>
                  <center><img src="/img/25.png" width="438" height="185" alt="Logo de Cerámica Uli"></center><br>
              </div>
          `,
      image: "https://via.placeholder.com/200x150/e6ccb3/333333?text=Checkout",
      notes:
        "Todos los pedidos se procesan a través de WhatsApp con el contacto del encargado del Negocio, por el momento aun no se pueden hacer compras dentro de la Aplicacion Web ",
    },
    {
      title: "Secciones Adicionales",
      content: `
              <div class="book-section">
                  <ul class="book-list">
                      <li><strong>Quejas:</strong> Utiliza el formulario o la información de contacto proporcionada en esta sección para comunicarte con nosotros si tienes algún problema o sugerencia.</li>
                      <li><strong>Nosotros:</strong> Conoce más sobre la esencia de Cerámicas Ulises.</li>
                      <li><strong>Tú Perfil:</strong> Mantén tus datos actualizados para futuras compras.</li>
                      <li><strong>Asistente/Tutorial:</strong> No dudes en usar estas herramientas si necesites ayuda adicional mientras navegas.</li>
                  </ul>
                  <div class="book-conclusion">
                      <p>¡Gracias por elegir Cerámicas Ulises!</p>
                      <p>Esperamos que disfrutes de la experiencia de compra.</p>
                  </div>
              </div>
          `,
      image: "https://via.placeholder.com/200x150/e6ccb3/333333?text=Gracias",
      notes: "Estamos para servirte y hacer de tu experiencia algo único",
    },
  ];

  // Estado del libro
  let isOpen = false;
  let currentPage = 0;
  const totalPages = bookContent.length;

  // Referencia al contenedor del libro
  const bookContainer = document.getElementById("virtual-book");

  // Inicializar el libro con la portada
  renderBookCover();

  // Función para mostrar la portada del libro
  function renderBookCover() {
    bookContainer.innerHTML = `
          <div class="book-cover">
              <div class="book-spine"></div>
              <div class="book-front">
                  <div class="book-cover-image">
                      <img src="img/por.png" alt="Portada del libro" class="cover-img">
                  </div>
                  <div class="book-title">
                      <h1>Cerámicas Ulises</h1>
                      <h2>Manual de Usuario</h2>
                  </div>
                  <div class="book-instructions">
                      (Haz clic para abrir)
                  </div>
              </div>
          </div>
      `;

    // Agregar evento de clic para abrir el libro
    const bookCover = bookContainer.querySelector(".book-cover");
    bookCover.addEventListener("click", openBook);
  }

  // Función para abrir el libro
  function openBook() {
    isOpen = true;
    bookContainer.classList.add("book-open");
    renderBookPages();
  }

  // Función para cerrar el libro
  function closeBook() {
    isOpen = false;
    currentPage = 0;
    bookContainer.classList.remove("book-open");
    renderBookCover();
  }

  // Función para avanzar a la siguiente página
  function nextPage() {
    if (currentPage < totalPages - 1) {
      currentPage++;
      renderBookPages();
    }
  }

  // Función para retroceder a la página anterior
  function prevPage() {
    if (currentPage > 0) {
      currentPage--;
      renderBookPages();
    }
  }

  // Función para mostrar las páginas del libro
  function renderBookPages() {
    const content = bookContent[currentPage];

    // Determinar qué imagen mostrar (la personalizada o la predeterminada)
    const imageSrc = content.image || "https://via.placeholder.com/200x150";
    const imageAlt = content.imageAlt || "Ilustración";

    // Determinar qué notas mostrar (las personalizadas o las predeterminadas)
    const pageNotes =
      content.notes ||
      "Notas adicionales o imágenes relacionadas con el contenido.";

    bookContainer.innerHTML = `
          <div class="book-pages">
              <div class="book-page left-page">
                  <div class="page-content">
                      <h2 class="page-title">${content.title}</h2>
                      <div class="page-text">
                          ${content.content}
                      </div>
                  </div>
                  <div class="page-number">${currentPage + 1}</div>
              </div>
              
              <div class="book-page right-page">
                  <div class="page-content">
                      <div class="page-image">
                          <img src="${imageSrc}" alt="${imageAlt}" class="page-img">
                      </div>
                      <div class="page-notes">
                          ${pageNotes}
                      </div>
                  </div>
                  <div class="page-number">${currentPage + 2}</div>
              </div>
              
              <div class="book-controls">
                  <button 
                      class="control-btn prev-btn" 
                      ${currentPage === 0 ? "disabled" : ""}
                      aria-label="Página anterior"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                  </button>
                  
                  <button 
                      class="control-btn close-btn" 
                      aria-label="Cerrar libro"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                  </button>
                  
                  <button 
                      class="control-btn next-btn" 
                      ${currentPage === totalPages - 1 ? "disabled" : ""}
                      aria-label="Página siguiente"
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                  </button>
              </div>
          </div>
      `;

    // Agregar eventos a los botones
    const prevBtn = bookContainer.querySelector(".prev-btn");
    const nextBtn = bookContainer.querySelector(".next-btn");
    const closeBtn = bookContainer.querySelector(".close-btn");

    prevBtn.addEventListener("click", prevPage);
    nextBtn.addEventListener("click", nextPage);
    closeBtn.addEventListener("click", closeBook);

    // Si la página actual es el Índice, agregar lógica para los elementos clicables
    if (content.title.trim() === "Índice") {
      const indexItems = bookContainer.querySelectorAll(".index-item");
      indexItems.forEach((item) => {
        item.addEventListener("click", function () {
          // Obtenemos el número de página del elemento clicado
          const pageNumber = parseInt(
            item.querySelector(".index-page").textContent
          );
          // Mapeo: si es 1 va a la posición 0 ("Introducción"), si es mayor, se asume que coincide con el índice del arreglo
          const targetPage = pageNumber === 1 ? 0 : pageNumber;
          currentPage = targetPage;
          renderBookPages();
        });
      });
    }
  }
});
