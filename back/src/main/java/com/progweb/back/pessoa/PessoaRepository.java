package com.progweb.back.pessoa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface PessoaRepository extends JpaRepository<Pessoa, Long> {

    public List<Pessoa> findByNome(String nome);

    public List<Pessoa> findByDataNascimento(Date dataNascimento);

}
