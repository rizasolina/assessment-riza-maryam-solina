PGDMP                         z            employee_payroll %   12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)     14.4 (Ubuntu 14.4-1.pgdg20.04+1) (    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    18687    employee_payroll    DATABASE     e   CREATE DATABASE employee_payroll WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
     DROP DATABASE employee_payroll;
                postgres    false            ?            1259    18815    employee    TABLE     ?  CREATE TABLE public.employee (
    id integer NOT NULL,
    nip character varying(10) NOT NULL,
    name character varying(50) NOT NULL,
    gender boolean NOT NULL,
    pob character varying(30) NOT NULL,
    dob date NOT NULL,
    email character varying(30) NOT NULL,
    is_married boolean NOT NULL,
    address character varying(100) NOT NULL,
    position_id integer NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);
    DROP TABLE public.employee;
       public         heap    postgres    false            ?            1259    18813    employee_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.employee_id_seq;
       public          postgres    false    211            ?           0    0    employee_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.employee_id_seq OWNED BY public.employee.id;
          public          postgres    false    210            ?            1259    18807    leave    TABLE     ?   CREATE TABLE public.leave (
    id integer NOT NULL,
    start_date date NOT NULL,
    end_date date NOT NULL,
    employee_id integer NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);
    DROP TABLE public.leave;
       public         heap    postgres    false            ?            1259    18805    leave_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.leave_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.leave_id_seq;
       public          postgres    false    209            ?           0    0    leave_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.leave_id_seq OWNED BY public.leave.id;
          public          postgres    false    208            ?            1259    18799    overtime    TABLE     *  CREATE TABLE public.overtime (
    id integer NOT NULL,
    date date NOT NULL,
    start_time time without time zone NOT NULL,
    end_time time without time zone NOT NULL,
    employee_id integer NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);
    DROP TABLE public.overtime;
       public         heap    postgres    false            ?            1259    18797    overtime_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.overtime_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.overtime_id_seq;
       public          postgres    false    207            ?           0    0    overtime_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.overtime_id_seq OWNED BY public.overtime.id;
          public          postgres    false    206            ?            1259    18791    payroll    TABLE     5  CREATE TABLE public.payroll (
    id integer NOT NULL,
    month integer NOT NULL,
    salary_amount bigint,
    overtime_amount bigint,
    salary_cut bigint,
    total_salary bigint,
    employee_id integer NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);
    DROP TABLE public.payroll;
       public         heap    postgres    false            ?            1259    18789    payroll_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.payroll_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.payroll_id_seq;
       public          postgres    false    205            ?           0    0    payroll_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.payroll_id_seq OWNED BY public.payroll.id;
          public          postgres    false    204            ?            1259    18783    position    TABLE     L  CREATE TABLE public."position" (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    salary bigint NOT NULL,
    meal_allowance bigint NOT NULL,
    transport_allowance bigint NOT NULL,
    family_allowance bigint NOT NULL,
    created_at timestamp without time zone,
    updated_at timestamp without time zone
);
    DROP TABLE public."position";
       public         heap    postgres    false            ?            1259    18781    position_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.position_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.position_id_seq;
       public          postgres    false    203            ?           0    0    position_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.position_id_seq OWNED BY public."position".id;
          public          postgres    false    202            ,           2604    18818    employee id    DEFAULT     j   ALTER TABLE ONLY public.employee ALTER COLUMN id SET DEFAULT nextval('public.employee_id_seq'::regclass);
 :   ALTER TABLE public.employee ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            +           2604    18810    leave id    DEFAULT     d   ALTER TABLE ONLY public.leave ALTER COLUMN id SET DEFAULT nextval('public.leave_id_seq'::regclass);
 7   ALTER TABLE public.leave ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    208    209            *           2604    18802    overtime id    DEFAULT     j   ALTER TABLE ONLY public.overtime ALTER COLUMN id SET DEFAULT nextval('public.overtime_id_seq'::regclass);
 :   ALTER TABLE public.overtime ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    207    207            )           2604    18794 
   payroll id    DEFAULT     h   ALTER TABLE ONLY public.payroll ALTER COLUMN id SET DEFAULT nextval('public.payroll_id_seq'::regclass);
 9   ALTER TABLE public.payroll ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    205    205            (           2604    18786    position id    DEFAULT     l   ALTER TABLE ONLY public."position" ALTER COLUMN id SET DEFAULT nextval('public.position_id_seq'::regclass);
 <   ALTER TABLE public."position" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            ?          0    18815    employee 
   TABLE DATA           ?   COPY public.employee (id, nip, name, gender, pob, dob, email, is_married, address, position_id, created_at, updated_at) FROM stdin;
    public          postgres    false    211   ?-       ?          0    18807    leave 
   TABLE DATA           ^   COPY public.leave (id, start_date, end_date, employee_id, created_at, updated_at) FROM stdin;
    public          postgres    false    209   g.       ?          0    18799    overtime 
   TABLE DATA           g   COPY public.overtime (id, date, start_time, end_time, employee_id, created_at, updated_at) FROM stdin;
    public          postgres    false    207   ?.       ?          0    18791    payroll 
   TABLE DATA           ?   COPY public.payroll (id, month, salary_amount, overtime_amount, salary_cut, total_salary, employee_id, created_at, updated_at) FROM stdin;
    public          postgres    false    205   ?.       ?          0    18783    position 
   TABLE DATA           ?   COPY public."position" (id, name, salary, meal_allowance, transport_allowance, family_allowance, created_at, updated_at) FROM stdin;
    public          postgres    false    203   J/       ?           0    0    employee_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.employee_id_seq', 1, true);
          public          postgres    false    210            ?           0    0    leave_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.leave_id_seq', 1, true);
          public          postgres    false    208            ?           0    0    overtime_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.overtime_id_seq', 1, true);
          public          postgres    false    206            ?           0    0    payroll_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.payroll_id_seq', 1, true);
          public          postgres    false    204            ?           0    0    position_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.position_id_seq', 3, true);
          public          postgres    false    202            6           2606    18820    employee employee_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.employee DROP CONSTRAINT employee_pkey;
       public            postgres    false    211            8           2606    18822    employee employee_unique 
   CONSTRAINT     Y   ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_unique UNIQUE (nip, email);
 B   ALTER TABLE ONLY public.employee DROP CONSTRAINT employee_unique;
       public            postgres    false    211    211            4           2606    18812    leave leave_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.leave
    ADD CONSTRAINT leave_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.leave DROP CONSTRAINT leave_pkey;
       public            postgres    false    209            2           2606    18804    overtime overtime_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.overtime
    ADD CONSTRAINT overtime_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.overtime DROP CONSTRAINT overtime_pkey;
       public            postgres    false    207            0           2606    18796    payroll payroll_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.payroll
    ADD CONSTRAINT payroll_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.payroll DROP CONSTRAINT payroll_pkey;
       public            postgres    false    205            .           2606    18788    position position_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."position"
    ADD CONSTRAINT position_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."position" DROP CONSTRAINT position_pkey;
       public            postgres    false    203            ?   e   x?3???000?ʬJ?,?I,???M?I?L?4????54?52?,?:??&f??%??r???3?4202?5??50V04?20?25?3?04?0????????? "?x      ?   6   x?3?4202?5??50D0?8aK]cCS+C+s=K#CS???=... O

?      ?   ?   x?3?4202?5??52?44?20 "NCK*m?k`?`hje`iel?ghliif??????? ?AD      ?   >   x?3???4575 NC0e?L͠?@##]K]cCS+CC+c#=ccS#???=... ?#      ?   s   x?3??r?43 NS0e??B(###]K]cCS++S3=sSKs3??.#???Ĵ4ǔ??<??2?24?3400?4d????Z?J?F?z?f?`???qqq ??(?     