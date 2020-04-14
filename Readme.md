## Implementación de la practica de desarrollo web

En este proyecto se hara una pagina para visualizar el funcionamiento del api (Frontend) y se creara un api en node js (Backend) en la cual se podran guardar urls con su respectivo nombre y descripción.

## Script de creación
 CREATE TABLE public.registros
(
    url text COLLATE pg_catalog."default" NOT NULL,
    descripcion text COLLATE pg_catalog."default",
    nombre text COLLATE pg_catalog."default" NOT NULL,
    id bigint NOT NULL DEFAULT nextval('registros_id_seq'::regclass),
    CONSTRAINT registros_pkey PRIMARY KEY (id)
)