function modelo_fotovoltaico()
  % Verifica se há argumentos passados
  args = argv();
  if length(args) < 4
      error('Por favor, forneça os quatro parâmetros necessários: TC, I_SC, V_dc, Vmp');
  end

  % Converte os argumentos de string para números
  TC = str2double(args{1});   % Coeficiente de temperatura (°C^-1)
  I_SC = str2double(args{2}); % Corrente de curto-circuito (A)
  V_dc = str2double(args{3}); % Tensão de circuito aberto (V)
  Vmp = str2double(args{4});  % Tensão no ponto de máxima potência (V)
  % Constantes
  q = 1.60217662 * 10^(-19);  % Carga elementar (C)
  k = 1.38064852 * 10^(-23);  % Constante de Boltzmann (J/K)
  n = 1.4;                     % Fator de idealidade
  T_0 = 298.15;                % Temperatura de referência (K)
  I_00 = 1.2799e-8;            % Corrente de saturação inicial (A)
  R_sh = 100;                  % Resistência de shunt (Ω)

  % Cria a pasta 'ctave-image' caso não exista
  if ~exist('octave-image', 'dir')
    mkdir('octave-image');
  end

  % Tensão (V)
  V = linspace(0, V_dc, 100);  % Varia de 0 a 0.72V

  % Curvas para irradiância variável
  G_vals = [200, 500, 800, 1000]; % Irradiâncias em W/m²

  % Preparando para plotar as curvas de corrente e potência em função de V
  figure;
  hold on;
  legend_entries = {};

  for G = G_vals
    % Fotocorrente (I_ph) depende da irradiância G
    I_ph = (G / 1000) * I_SC;  % Corrente fotovoltaica gerada

    % Corrente de saturação (I_0) depende da temperatura
    I_0 = I_00 * (T_0 / 298.15)^3 * exp(-q * 1.12 / (n * k) * (1 / T_0 - 1 / 298.15));

    % Corrente (I) usando a equação do diodo único
    I = I_ph - I_0 * (exp((q * V) / (n * k * T_0)) - 1) - V / R_sh;

    % Corrente negativa não é fisicamente possível, substitui por NaN
    I(I < 0) = NaN;

    % Plotando a curva de corrente vs tensão (I-V)
    plot(V, I);
    legend_entries = [legend_entries, {['G = ' num2str(G) ' W/m²']}];
  end

  xlabel('Tensão (V)');
  ylabel('Corrente (I)');
  title('Curva I-V para Diferentes Irradiâncias');
  grid on;
  legend(legend_entries);

  % Salvando a figura em um arquivo na pasta 'ctave-image'
  print('octave-image/I_V_Irradiancia.png', '-dpng');  % Salva como PNG

  % Curvas para potência
  figure;
  hold on;
  legend_entries = {};

  for G = G_vals
    I_ph = (G / 1000) * I_SC;  % Corrente fotovoltaica gerada
    I_0 = I_00 * (T_0 / 298.15)^3 * exp(-q * 1.12 / (n * k) * (1 / T_0 - 1 / 298.15));

    % Corrente (I) e Potência (P)
    I = I_ph - I_0 * (exp((q * V) / (n * k * T_0)) - 1) - V / R_sh;
    P = V .* I;

    % Corrente negativa não é fisicamente possível, substitui por NaN
    I(I < 0) = NaN;
    P(P < 0) = NaN;

    % Plotando a curva de potência vs tensão (P-V)
    plot(V, P);
    legend_entries = [legend_entries, {['G = ' num2str(G) ' W/m²']}];
  end

  xlabel('Tensão (V)');
  ylabel('Potência (P)');
  title('Curva P-V para Diferentes Irradiâncias');
  grid on;
  legend(legend_entries);

  % Salvando a figura em um arquivo na pasta 'ctave-image'
  print('octave-image/P_V_Irradiancia.png', '-dpng');  % Salva como PNG

  % Curvas para temperatura variável
  temperatures = [298.15, 308.15, 318.15, 328.15]; % Temperaturas de 25°C a 55°C

  figure;
  hold on;
  legend_entries = {};

  for T = temperatures
    I_ph = (1000 / 1000) * I_SC;  % Corrente fotovoltaica gerada para G = 1000 W/m²
    I_0 = I_00 * (T / 298.15)^3 * exp(-q * 1.12 / (n * k) * (1 / T - 1 / 298.15));

    % Corrente (I) usando a equação do diodo único
    I = I_ph - I_0 * (exp((q * V) / (n * k * T)) - 1) - V / R_sh;

    % Corrente negativa não é fisicamente possível, substitui por NaN
    I(I < 0) = NaN;

    % Plotando a curva de corrente vs tensão (I-V) para diferentes temperaturas
    plot(V, I);
    legend_entries = [legend_entries, {['T = ' num2str(T - 273.15) ' °C']}];
  end

  xlabel('Tensão (V)');
  ylabel('Corrente (I)');
  title('Curva I-V para Diferentes Temperaturas');
  grid on;
  legend(legend_entries);

  % Salvando a figura em um arquivo na pasta 'ctave-image'
  print('octave-image/I_V_Temperatura.png', '-dpng');  % Salva como PNG

  % Curvas para potência
  figure;
  hold on;
  legend_entries = {};

  for T = temperatures
    I_ph = (1000 / 1000) * I_SC;  % Corrente fotovoltaica gerada para G = 1000 W/m²
    I_0 = I_00 * (T / 298.15)^3 * exp(-q * 1.12 / (n * k) * (1 / T - 1 / 298.15));

    % Corrente (I) e Potência (P)
    I = I_ph - I_0 * (exp((q * V) / (n * k * T)) - 1) - V / R_sh;
    P = V .* I;

    % Corrente negativa não é fisicamente possível, substitui por NaN
    I(I < 0) = NaN;
    P(P < 0) = NaN;

    % Plotando a curva de potência vs tensão (P-V) para diferentes temperaturas
    plot(V, P);
    legend_entries = [legend_entries, {['T = ' num2str(T - 273.15) ' °C']}];
  end

  xlabel('Tensão (V)');
  ylabel('Potência (P)');
  title('Curva P-V para Diferentes Temperaturas');
  grid on;
  legend(legend_entries);

  % Salvando a figura em um arquivo na pasta 'ctave-image'
  print('octave-image/P_V_Temperatura.png', '-dpng');  % Salva como PNG

  disp("O Octave foi executado com sucesso!");

end

% Chame a função
modelo_fotovoltaico();

