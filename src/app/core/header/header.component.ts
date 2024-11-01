import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isDropdownOpen = false; // Estado para controlar a visibilidade do dropdown
  isDarkTheme: boolean = false; // Estado para controlar o tema

  constructor(private themeService: ThemeService) {
    // Subscrição para receber alterações no tema
    this.themeService.theme$.subscribe((dark) => {
      this.isDarkTheme = dark;
      this.updateBodyClass(dark);
    });
  }

  // Método para alternar a visibilidade do dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Método para alternar o tema
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme; // Alterna o estado do tema
    this.themeService.themeDark = this.isDarkTheme; // Atualiza o serviço de tema
  }

  // Método para atualizar a classe do corpo com base no tema
  private updateBodyClass(isDark: boolean) {
    const body = document.body;
    if (isDark) {
      body.classList.add('theme-dark');
    } else {
      body.classList.remove('theme-dark');
    }
  }

  // Método para fechar o dropdown ao clicar fora dele
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdownButton = document.getElementById('dropdownBtn');
    const dropdownContent = document.getElementById('dropdownContent');

    // Verifica se o clique foi fora do botão e do conteúdo do dropdown
    if (dropdownButton && !dropdownButton.contains(target) && dropdownContent && !dropdownContent.contains(target)) {
      this.isDropdownOpen = false; // Fecha o dropdown
    }
  }
}
